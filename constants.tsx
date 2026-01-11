
import React from 'react';
import type { Skill, Certification, Project, Profile } from './types';

// Icons
const GCP_ICON = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12.83,15.05L16.2,21.34L15.34,22L11.5,15.05L8.5,10.05L1.5,10.05L1.5,17L-2.22045e-07,17L-2.22045e-07,8.05L8.5,8.05L12.83,15.05 M20.5,8.05L13.5,8.05L13.5,10.05L17.5,10.05L11.23,19.34L12.1,20.08L20.5,8.05Z"/></svg>;
const SALESFORCE_ICON = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M14.3,21.09C13.6,21.69 12.7,22 11.9,22C10.7,22 9.5,21.49 8.8,20.49C7.8,19.19 7.9,17.29 9,16.09C9.5,15.59 10.1,15.19 10.8,14.99C11.5,14.79 12.2,14.79 12.9,14.99C14.7,15.49 15.8,17.19 15.6,18.99C15.5,20.09 15.1,20.69 14.3,21.09M20.6,13.7C19.9,13.1 19,12.8 18.1,12.8C16.9,12.8 15.7,13.3 15,14.3C14,15.6 14.1,17.5 15.2,18.7C15.7,19.2 16.3,19.6 17,19.8C17.7,20 18.4,20 19.1,19.8C20.9,19.3 22,17.6 21.8,15.8C21.7,14.7 21.3,14.1 20.6,13.7M11.9,13.2C12.7,13.2 13.6,12.9 14.3,12.3C15.1,11.7 15.6,11 15.6,10C15.6,8.2 14.5,6.5 12.7,6C12,5.8 11.3,5.8 10.6,6C9.5,6.2 8.5,6.8 7.8,7.7C6.7,9 6.6,10.9 7.7,12.1C8.2,12.6 8.8,13 9.5,13.2C10.2,13.4 11,13.4 11.9,13.2M18.1,11.2C19,11.2 19.9,10.9 20.6,10.3C21.4,9.7 21.9,9 21.9,8C21.9,6.2 20.8,4.5 19,4C18.3,3.8 17.6,3.8 16.9,4C15.8,4.2 14.8,4.8 14.1,5.7C13,7 12.9,8.9 14,10.1C14.5,10.6 15.1,11 15.8,11.2C16.5,11.4 17.3,11.4 18.1,11.2M11.9,2C6.4,2 2,6.5 2,12C2,17.5 6.4,22 11.9,22C17.4,22 21.8,17.5 21.8,12C21.8,6.5 17.4,2 11.9,2Z"/></svg>;
const PYTHON_ICON = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12,2A10,10,0,0,0,2,12A10,10,0,0,0,12,22A10,10,0,0,0,22,12A10,10,0,0,0,12,2M11,7V11H7V13H11V17H13V13H17V11H13V7H11Z" /></svg>; // Simplified for illustrative purpose
const TEAMWORK_ICON = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>;
const GENAI_ICON = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5zm4 4h-2v-2h2v2zm0-4h-2V7h2v5z"/></svg>;
const ML_IOT_ICON = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2H17V4H19V6H17V8H19V10H17V12H19V14H17V16H19V18H17V20H19V22H17H7V20H5V18H7V16H5V14H7V12H5V10H7V8H5V6H7V4H5V2H7M7 6V10H12V18H14V10H17V6H7Z" /></svg>;

export const SKILLS_DATA: Skill[] = [
  { name: 'Google Cloud Platform (GCP)', icon: GCP_ICON },
  { name: 'Salesforce', icon: SALESFORCE_ICON },
  { name: 'Python', icon: PYTHON_ICON },
  { name: 'Teamwork & Collaboration', icon: TEAMWORK_ICON },
  { name: 'Generative AI', icon: GENAI_ICON },
  { name: 'Machine Learning & IoT', icon: ML_IOT_ICON },
];

export const CERTIFICATIONS_DATA: Certification[] = [
  { name: 'Google Cloud Computing Foundations', issuer: 'Google Cloud', icon: GCP_ICON, category: 'Google Cloud' },
  { name: 'Generative AI Study Jams', issuer: 'Google Cloud', icon: GENAI_ICON, category: 'General' },
  { name: 'Salesforce Agentblazer Champion', issuer: 'Salesforce', icon: SALESFORCE_ICON, category: 'Salesforce' },
  { name: 'Associate Cloud Engineer Prep', issuer: 'Google Cloud', icon: GCP_ICON, category: 'Google Cloud' },
  { name: 'Flow Fundamentals Superbadge', issuer: 'Salesforce', icon: SALESFORCE_ICON, category: 'Salesforce' },
  { name: 'Security Specialist Superbadge', issuer: 'Salesforce', icon: SALESFORCE_ICON, category: 'Salesforce' },
  { name: 'Cloud Infrastructure Skills', issuer: 'Google Cloud', icon: GCP_ICON, category: 'Google Cloud' },
  { name: 'Kubernetes Essentials', issuer: 'Google Cloud', icon: GCP_ICON, category: 'Google Cloud' },
];

export const PROJECTS_DATA: Project[] = [
  { name: 'Intelligent Brushing and Oral Health Monitoring', description: 'Utilizing Machine Learning and IoT to monitor and improve oral hygiene habits.' },
  { name: 'Monitoring Attendance System', description: 'A system to track and manage attendance records efficiently.' },
];

export const PROFILES_DATA: Profile[] = [
  { 
    name: 'LinkedIn', 
    url: 'https://linkedin.com/in/soham-burhan', 
    icon: <svg role="img" viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>,
    description: 'Professional overview, connections, and career updates.'
  },
  { 
    name: 'Salesforce Trailblazer', 
    url: 'https://salesforce.com/trailblazer/sohamburhan', 
    icon: SALESFORCE_ICON,
    description: 'Profile summary, badges (20+), groups, and points.'
  },
  { 
    name: 'Google Cloud Skill Boost', 
    url: 'https://skills.google/public_profiles/4354bb32-b01b-4c97-91ed-f8cefc167b73', 
    icon: GCP_ICON,
    description: 'Public profile with badge count (21+), points (62k+), and achievements.'
  },
  { 
    name: 'GitHub', 
    url: 'https://github.com/SOHAM774-CODER', 
    icon: <svg role="img" viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>,
    description: 'Major repositories (32), Hacktoberfest contributions, and recent activity.'
  },
];