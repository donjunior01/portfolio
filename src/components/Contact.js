import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Dimensions,
  Platform,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import emailjs from '@emailjs/browser';
import { useTheme } from '../hooks/useTheme';
import { SPACING, FONTS, SIZES } from '../constants/theme';
import { PERSONAL_INFO, EMAIL_CONFIG } from '../../assets/data/portfolioData';
import { downloadCV, printCV } from '../utils/cvGenerator';

const { width } = Dimensions.get('window');

const Contact = () => {
  const { colors, shadows } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const isMobile = width < 768;

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      Alert.alert('Error', 'Please enter your name');
      return false;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      Alert.alert('Error', 'Please enter a valid email address');
      return false;
    }
    if (!formData.subject.trim()) {
      Alert.alert('Error', 'Please enter a subject');
      return false;
    }
    if (!formData.message.trim()) {
      Alert.alert('Error', 'Please enter a message');
      return false;
    }
    
    // Validate message has at least 5 words
    const wordCount = formData.message.trim().split(/\s+/).filter(word => word.length > 0).length;
    if (wordCount < 5) {
      Alert.alert('Error', `Please enter at least 5 words in your message. Current word count: ${wordCount}`);
      return false;
    }
    
    return true;
  };

  const handleSubmit = async () => {
    console.log('Submit button clicked!');
    
    if (!validateForm()) {
      console.log('Validation failed');
      return;
    }

    console.log('Validation passed, sending email from website backend...');
    setLoading(true);

    try {
      // Send email through backend API
      const response = await fetch('http://localhost:3001/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        console.log('✅ Email sent successfully!');
        
        // Show success message
        Alert.alert(
          '✅ Message Sent Successfully!',
          `Thank you ${formData.name}! Your message has been sent directly to ${PERSONAL_INFO.email}.\n\nI'll get back to you as soon as possible.`,
          [{ 
            text: 'OK', 
            onPress: () => {
              // Clear form after successful send
              setFormData({ name: '', email: '', subject: '', message: '' });
            }
          }]
        );
      } else {
        throw new Error(data.message || 'Failed to send email');
      }
      
    } catch (error) {
      console.error('Failed to send email:', error);
      Alert.alert(
        '❌ Failed to Send Email',
        error.message || 'There was an error sending your message. Please make sure the backend server is running or contact me directly at:\n\n' + 
        PERSONAL_INFO.email,
        [{ text: 'OK' }]
      );
    } finally {
      setLoading(false);
    }
  };

  const openLink = (url) => {
    if (Platform.OS === 'web') {
      window.open(url, '_blank');
    }
  };

  const handleDownloadCV = () => {
    const success = downloadCV();
    if (success) {
      Alert.alert('Success', 'CV downloaded successfully!');
    } else {
      Alert.alert('Error', 'CV download is only available on web platform');
    }
  };

  const handlePrintCV = () => {
    const success = printCV();
    if (!success) {
      Alert.alert('Error', 'CV printing is only available on web platform');
    }
  };

  const socialLinks = [
    {
      icon: 'mail',
      label: 'Email',
      value: PERSONAL_INFO.email,
      url: `mailto:${PERSONAL_INFO.email}`,
    },
    {
      icon: 'call',
      label: 'Phone',
      value: PERSONAL_INFO.phone,
      url: `tel:${PERSONAL_INFO.phone}`,
    },
    {
      icon: 'logo-github',
      label: 'GitHub',
      value: '@donjunio01',
      url: PERSONAL_INFO.github,
    },
    {
      icon: 'logo-linkedin',
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      url: PERSONAL_INFO.linkedin,
    },
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>
            Get In Touch
          </Text>
          <Text style={[styles.sectionSubtitle, { color: colors.textSecondary }]}>
            Let's discuss opportunities, projects, or just say hello!
          </Text>
        </View>

        <View style={styles.mainContent}>
          {/* Contact Form */}
          <View style={[styles.formContainer, { backgroundColor: colors.cardBg }, shadows.medium]}>
            <Text style={[styles.formTitle, { color: colors.text }]}>
              Send a Message
            </Text>

            <View style={styles.form}>
              {/* Name Input */}
              <View style={styles.inputGroup}>
                <Text style={[styles.label, { color: colors.text }]}>
                  Name *
                </Text>
                <View style={[styles.inputContainer, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                  <Ionicons name="person-outline" size={20} color={colors.textSecondary} />
                  <TextInput
                    style={[styles.input, { color: colors.text }]}
                    placeholder="Your full name"
                    placeholderTextColor={colors.textSecondary}
                    value={formData.name}
                    onChangeText={(text) => handleChange('name', text)}
                  />
                </View>
              </View>

              {/* Email Input */}
              <View style={styles.inputGroup}>
                <Text style={[styles.label, { color: colors.text }]}>
                  Email *
                </Text>
                <View style={[styles.inputContainer, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                  <Ionicons name="mail-outline" size={20} color={colors.textSecondary} />
                  <TextInput
                    style={[styles.input, { color: colors.text }]}
                    placeholder="your.email@example.com"
                    placeholderTextColor={colors.textSecondary}
                    value={formData.email}
                    onChangeText={(text) => handleChange('email', text)}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>
              </View>

              {/* Subject Input */}
              <View style={styles.inputGroup}>
                <Text style={[styles.label, { color: colors.text }]}>
                  Subject *
                </Text>
                <View style={[styles.inputContainer, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                  <Ionicons name="text-outline" size={20} color={colors.textSecondary} />
                  <TextInput
                    style={[styles.input, { color: colors.text }]}
                    placeholder="Message subject"
                    placeholderTextColor={colors.textSecondary}
                    value={formData.subject}
                    onChangeText={(text) => handleChange('subject', text)}
                  />
                </View>
              </View>

              {/* Message Input */}
              <View style={styles.inputGroup}>
                <Text style={[styles.label, { color: colors.text }]}>
                  Message *
                </Text>
                <View style={[styles.textareaContainer, { backgroundColor: colors.surface, borderColor: colors.border }]}>
                  <TextInput
                    style={[styles.textarea, { color: colors.text }]}
                    placeholder="Your message..."
                    placeholderTextColor={colors.textSecondary}
                    value={formData.message}
                    onChangeText={(text) => handleChange('message', text)}
                    multiline
                    numberOfLines={6}
                    textAlignVertical="top"
                  />
                </View>
              </View>

              {/* Submit Button */}
              <TouchableOpacity
                onPress={handleSubmit}
                disabled={loading}
                style={[
                  styles.submitButton,
                  { backgroundColor: colors.primary },
                  loading && { opacity: 0.6 },
                ]}
              >
                {loading ? (
                  <ActivityIndicator color="#ffffff" />
                ) : (
                  <>
                    <Text style={styles.submitText}>Send Message</Text>
                    <Ionicons name="send" size={20} color="#ffffff" />
                  </>
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* Contact Info */}
          <View style={styles.infoContainer}>
            <Text style={[styles.infoTitle, { color: colors.text }]}>
              Contact Information
            </Text>
            <Text style={[styles.infoSubtitle, { color: colors.textSecondary }]}>
              Feel free to reach out through any of these channels
            </Text>

            <View style={styles.contactMethods}>
              {socialLinks.map((link, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => openLink(link.url)}
                  style={[styles.contactMethod, { backgroundColor: colors.cardBg }, shadows.small]}
                >
                  <View style={[styles.contactIcon, { backgroundColor: colors.surface }]}>
                    <Ionicons name={link.icon} size={24} color={colors.primary} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={[styles.contactLabel, { color: colors.textSecondary }]}>
                      {link.label}
                    </Text>
                    <Text style={[styles.contactValue, { color: colors.text }]}>
                      {link.value}
                    </Text>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
                </TouchableOpacity>
              ))}
            </View>

            {/* Download CV Buttons */}
            <View style={styles.cvButtonsContainer}>
              <TouchableOpacity
                onPress={handleDownloadCV}
                style={[styles.cvButton, { backgroundColor: colors.primary }]}
              >
                <Ionicons name="download-outline" size={24} color="#ffffff" />
                <Text style={styles.cvButtonText}>Download CV</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handlePrintCV}
                style={[styles.cvButton, { backgroundColor: colors.accent }]}
              >
                <Ionicons name="print-outline" size={24} color="#ffffff" />
                <Text style={styles.cvButtonText}>Print CV</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.xxl * 2,
  },
  content: {
    maxWidth: SIZES.width,
    width: '100%',
    alignSelf: 'center',
  },
  header: {
    marginBottom: SPACING.xxl,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: FONTS.sizes.xxxl,
    fontWeight: 'bold',
    marginBottom: SPACING.sm,
    textAlign: 'center',
  },
  sectionSubtitle: {
    fontSize: FONTS.sizes.md,
    textAlign: 'center',
    maxWidth: 600,
  },
  mainContent: {
    flexDirection: width < 1024 ? 'column' : 'row',
    gap: SPACING.xl,
  },
  formContainer: {
    flex: 1,
    padding: SPACING.xl,
    borderRadius: SIZES.borderRadius,
  },
  formTitle: {
    fontSize: FONTS.sizes.xl,
    fontWeight: 'bold',
    marginBottom: SPACING.lg,
  },
  form: {
    gap: SPACING.lg,
  },
  inputGroup: {
    gap: SPACING.xs,
  },
  label: {
    fontSize: FONTS.sizes.sm,
    fontWeight: '600',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    borderRadius: SIZES.borderRadiusSm,
    borderWidth: 1,
    height: 50,
    gap: SPACING.sm,
  },
  input: {
    flex: 1,
    fontSize: FONTS.sizes.md,
    height: '100%',
  },
  textareaContainer: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
    borderRadius: SIZES.borderRadiusSm,
    borderWidth: 1,
    minHeight: 150,
  },
  textarea: {
    fontSize: FONTS.sizes.md,
    minHeight: 120,
  },
  submitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.md,
    borderRadius: SIZES.borderRadiusSm,
    gap: SPACING.sm,
    marginTop: SPACING.sm,
  },
  submitText: {
    color: '#ffffff',
    fontSize: FONTS.sizes.md,
    fontWeight: '600',
  },
  infoContainer: {
    flex: width < 1024 ? 1 : 0.8,
  },
  infoTitle: {
    fontSize: FONTS.sizes.xl,
    fontWeight: 'bold',
    marginBottom: SPACING.sm,
  },
  infoSubtitle: {
    fontSize: FONTS.sizes.sm,
    marginBottom: SPACING.lg,
  },
  contactMethods: {
    gap: SPACING.md,
    marginBottom: SPACING.xl,
  },
  contactMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.md,
    borderRadius: SIZES.borderRadiusSm,
    gap: SPACING.md,
  },
  contactIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactLabel: {
    fontSize: FONTS.sizes.xs,
    marginBottom: SPACING.xs,
  },
  contactValue: {
    fontSize: FONTS.sizes.sm,
    fontWeight: '600',
  },
  cvButtonsContainer: {
    flexDirection: 'row',
    gap: SPACING.md,
    flexWrap: 'wrap',
  },
  cvButton: {
    flex: 1,
    minWidth: 150,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.md,
    borderRadius: SIZES.borderRadiusSm,
    gap: SPACING.sm,
  },
  cvButtonText: {
    color: '#ffffff',
    fontSize: FONTS.sizes.md,
    fontWeight: '600',
  },
});

export default Contact;
