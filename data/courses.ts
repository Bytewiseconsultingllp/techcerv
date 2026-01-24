export interface Course {
  id: string;
  category: string;
  subcategory: string;
  title: string;
  image: string;
  enrolled: number;
  duration: string;
  price: string;
}

export const courses: Course[] = [
  // AWS Beginner
  { id: 'aws-1', category: 'aws', subcategory: 'aBeginner', title: 'AWS Certified Cloud Practitioner', image: '/images/AWS-Certified-Cloud-Practitioner.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  
  // AWS Associate Level
  { id: 'aws-2', category: 'aws', subcategory: 'aAssociate', title: 'AWS Certified Solutions Architect', image: '/images/AWS-Certified-Solutions-Architect.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'aws-3', category: 'aws', subcategory: 'aAssociate', title: 'AWS Certified Developer', image: '/images/AWS-Certified-Developer.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'aws-4', category: 'aws', subcategory: 'aAssociate', title: 'AWS Certified SysOps Administrator', image: '/images/AWS-Certified-SysOps-Administrator.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },

  // Google Cloud Foundational
  { id: 'gcp-1', category: 'gcp', subcategory: 'gFoundational', title: 'Cloud Digital Leader', image: '/images/Cloud-Digital-Leader.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  
  // Google Cloud Associate
  { id: 'gcp-2', category: 'gcp', subcategory: 'gAssociate', title: 'Associate Cloud Engineer', image: '/images/dev.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  
  // Google Cloud Professional
  { id: 'gcp-3', category: 'gcp', subcategory: 'gProfessional', title: 'Professional Cloud Architect', image: '/images/dev.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'gcp-4', category: 'gcp', subcategory: 'gProfessional', title: 'Professional Data Engineer', image: '/images/dev.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'gcp-5', category: 'gcp', subcategory: 'gProfessional', title: 'Professional Cloud Developer', image: '/images/dev.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'gcp-6', category: 'gcp', subcategory: 'gProfessional', title: 'Professional Cloud Security Engineer', image: '/images/dev.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'gcp-7', category: 'gcp', subcategory: 'gProfessional', title: 'Professional Cloud Network Engineer', image: '/images/dev.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'gcp-8', category: 'gcp', subcategory: 'gProfessional', title: 'Professional Cloud DevOps Engineer', image: '/images/dev.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'gcp-9', category: 'gcp', subcategory: 'gProfessional', title: 'Professional Machine Learning Engineer', image: '/images/dev.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'gcp-10', category: 'gcp', subcategory: 'gProfessional', title: 'Professional Cloud Database Engineer', image: '/images/dev.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'gcp-11', category: 'gcp', subcategory: 'gProfessional', title: 'Professional Google Workspace Administrator', image: '/images/dev.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },

  // Microsoft 365 Fundamentals
  { id: 'm365-1', category: 'm365', subcategory: 'mFundamentals', title: 'Azure Fundamentals AZ-900', image: '/images/Azure-Fundamentals-AZ-900.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'm365-2', category: 'm365', subcategory: 'mFundamentals', title: 'Microsoft 365 Fundamentals MS-900', image: '/images/Microsoft-365-Fundamentals-MS-900.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'm365-3', category: 'm365', subcategory: 'mFundamentals', title: 'Security, Compliance, and Identity Fundamentals SC-900', image: '/images/Security-Compliance-and-Identity-Fundamentals-SC-900.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'm365-4', category: 'm365', subcategory: 'mFundamentals', title: 'Power Platform Fundamentals PL-900', image: '/images/Power-Platform-Fundamentals-PL-900.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'm365-5', category: 'm365', subcategory: 'mFundamentals', title: 'Dynamics 365 Fundamentals (CRM) MB-910', image: '/images/Dynamics-365-Fundamentals-(CRM)-MB-910.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'm365-6', category: 'm365', subcategory: 'mFundamentals', title: 'Dynamics 365 Fundamentals (ERP) MB-920', image: '/images/Dynamics-365-Fundamentals-(ERP)-MB-920.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },

  // Microsoft 365 Associate Level
  { id: 'm365-7', category: 'm365', subcategory: 'mAssociate', title: 'Azure Administrator Associate AZ-104', image: '/images/Azure-Administrator-Associate-AZ-104.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'm365-8', category: 'm365', subcategory: 'mAssociate', title: 'Azure Developer Associate AZ-204', image: '/images/Azure-Developer-Associate-AZ-204.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'm365-9', category: 'm365', subcategory: 'mAssociate', title: 'Azure Security Engineer Associate AZ-500', image: '/images/Azure-Security-Engineer-Associate-AZ-500.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'm365-10', category: 'm365', subcategory: 'mAssociate', title: 'Azure Network Engineer Associate AZ-700', image: '/images/Azure-Network-Engineer-Associate-AZ-700.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'm365-11', category: 'm365', subcategory: 'mAssociate', title: 'Microsoft 365 Administrator Associate MS-102', image: '/images/Microsoft-365-Administrator-Associate-MS-102.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'm365-12', category: 'm365', subcategory: 'mAssociate', title: 'Teams Administrator Associate MS-700', image: '/images/Teams-Administrator-Associate-MS-700.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'm365-13', category: 'm365', subcategory: 'mAssociate', title: 'Endpoint Administrator Associate MD-102', image: '/images/Endpoint-Administrator-Associate-MD-102.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'm365-14', category: 'm365', subcategory: 'mAssociate', title: 'Identity and Access Administrator SC-300', image: '/images/Identity-and-Access-Administrator-SC-300.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'm365-15', category: 'm365', subcategory: 'mAssociate', title: 'Information Protection Administrator SC-400', image: '/images/Information-Protection-Administrator-SC-400.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'm365-16', category: 'm365', subcategory: 'mAssociate', title: 'Security Operations Analyst SC-200', image: '/images/Security-Operations-Analyst-SC-200.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'm365-17', category: 'm365', subcategory: 'mAssociate', title: 'Power Platform App Maker Associate PL-100', image: '/images/Power-Platform-App-Maker-Associate-PL-100.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'm365-18', category: 'm365', subcategory: 'mAssociate', title: 'Power Platform Functional Consultant PL-200', image: '/images/Power-Platform-Functional-Consultant-PL-200.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'm365-19', category: 'm365', subcategory: 'mAssociate', title: 'Power BI Data Analyst Associate PL-300', image: '/images/Power-BI-Data-Analyst-Associate-PL-300.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'm365-20', category: 'm365', subcategory: 'mAssociate', title: 'Dynamics 365 Sales Functional Consultant MB-210', image: '/images/Dynamics-365-Sales-Functional-Consultant-MB-210.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'm365-21', category: 'm365', subcategory: 'mAssociate', title: 'Dynamics 365 Customer Service MB-230', image: '/images/Dynamics-365-Customer-Service-MB-230.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'm365-22', category: 'm365', subcategory: 'mAssociate', title: 'Dynamics 365 Marketing MB-220', image: '/images/Dynamics-365-Marketing-MB-220.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'm365-23', category: 'm365', subcategory: 'mAssociate', title: 'Dynamics 365 Finance Functional Consultant MB-310', image: '/images/Dynamics-365-Finance-Functional-Consultant-MB-310.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'm365-24', category: 'm365', subcategory: 'mAssociate', title: 'Dynamics 365 Supply Chain Management MB-330', image: '/images/dev.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'm365-25', category: 'm365', subcategory: 'mAssociate', title: 'Dynamics 365 Business Central Functional Consultant MB-800', image: '/images/dev.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },

  // Microsoft 365 Expert Level
  { id: 'm365-26', category: 'm365', subcategory: 'mExpert', title: 'Azure Solutions Architect Expert AZ-305', image: '/images/dev.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'm365-27', category: 'm365', subcategory: 'mExpert', title: 'DevOps Engineer Expert AZ-400', image: '/images/dev.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'm365-28', category: 'm365', subcategory: 'mExpert', title: 'Microsoft 365 Expert MS-102 + experience', image: '/images/dev.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'm365-29', category: 'm365', subcategory: 'mExpert', title: 'Cybersecurity Architect Expert SC-100', image: '/images/dev.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },

  // Microsoft 365 Specialty
  { id: 'm365-30', category: 'm365', subcategory: 'mSpecialty', title: 'Azure AI Engineer Associate AI-102', image: '/images/dev.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'm365-31', category: 'm365', subcategory: 'mSpecialty', title: 'Azure Data Scientist Associate DP-100', image: '/images/dev.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'm365-32', category: 'm365', subcategory: 'mSpecialty', title: 'Azure Data Engineer Associate DP-203', image: '/images/dev.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'm365-33', category: 'm365', subcategory: 'mSpecialty', title: 'Azure Database Administrator Associate DP-300', image: '/images/dev.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'm365-34', category: 'm365', subcategory: 'mSpecialty', title: 'Windows Server Hybrid Administrator AZ-800 & AZ-801', image: '/images/dev.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'm365-35', category: 'm365', subcategory: 'mSpecialty', title: 'Azure Stack Hub Operator Associate AZ-600', image: '/images/dev.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'm365-36', category: 'm365', subcategory: 'mSpecialty', title: 'Cosmos DB Developer Specialty DP-420', image: '/images/dev.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },

  // Microsoft 365 Copilot & AI
  { id: 'm365-37', category: 'm365', subcategory: 'mCopilot', title: 'Copilot for Microsoft 365 (Enterprise) MS-900', image: '/images/dev.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'm365-38', category: 'm365', subcategory: 'mCopilot', title: 'Copilot Studio & Prompt Engineering (Coming soon) TBA', image: '/images/dev.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'm365-39', category: 'm365', subcategory: 'mCopilot', title: 'Generative AI Fundamentals TBA (Expected mid-2025)', image: '/images/dev.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },

  // AI Foundational
  { id: 'ai-1', category: 'ai', subcategory: 'aiFoundational', title: 'AI-900 – Microsoft Certified: Azure AI Fundamentals', image: '/images/dev.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'ai-2', category: 'ai', subcategory: 'aiFoundational', title: 'PCEP – Certified Entry-Level Python Programmer (Python Institute)', image: '/images/dev.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },

  // AI Intermediate
  { id: 'ai-3', category: 'ai', subcategory: 'aiIntermediate', title: 'DP-100 – Microsoft Certified: Azure Data Scientist Associate', image: '/images/dev.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'ai-4', category: 'ai', subcategory: 'aiIntermediate', title: 'AWS Certified Machine Learning – Specialty – MLS-C02', image: '/images/dev.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'ai-5', category: 'ai', subcategory: 'aiIntermediate', title: 'Google Cloud – Professional Machine Learning Engineer', image: '/images/dev.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'ai-6', category: 'ai', subcategory: 'aiIntermediate', title: 'TensorFlow Developer Certificate', image: '/images/dev.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },

  // AI Advanced
  { id: 'ai-7', category: 'ai', subcategory: 'aiAdvanced', title: 'IBM AI Engineering Professional Certificate', image: '/images/dev.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'ai-8', category: 'ai', subcategory: 'aiAdvanced', title: 'MIT Professional Certificate in Machine Learning & AI', image: '/images/dev.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'ai-9', category: 'ai', subcategory: 'aiAdvanced', title: 'Stanford University – Machine Learning Specialization', image: '/images/dev.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'ai-10', category: 'ai', subcategory: 'aiAdvanced', title: 'NVIDIA Deep Learning Institute Certifications', image: '/images/dev.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },

  // AI Role-Based
  { id: 'ai-11', category: 'ai', subcategory: 'aiRole', title: 'Certified Artificial Intelligence Practitioner (CAIP)', image: '/images/dev.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'ai-12', category: 'ai', subcategory: 'aiRole', title: 'Google Cloud AI Engineering Path', image: '/images/dev.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'ai-13', category: 'ai', subcategory: 'aiRole', title: 'AWS Certified Data Analytics – Specialty', image: '/images/dev.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'ai-14', category: 'ai', subcategory: 'aiRole', title: 'Azure Database Administrator Associate DP-300', image: '/images/dev.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
  { id: 'ai-15', category: 'ai', subcategory: 'aiRole', title: 'Microsoft Applied Skills: Build and use AI models with Azure Machine', image: '/images/dev.png', enrolled: 2464, duration: '5 Weekends', price: '₹ 49,999.00' },
];
