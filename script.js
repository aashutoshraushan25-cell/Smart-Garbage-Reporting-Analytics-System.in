const STORAGE_KEY = "smartGarbageComplaints";
const ADMIN_SESSION_KEY = "smartGarbageAdminSession";
const LANGUAGE_STORAGE_KEY = "smartGarbageLanguage";
const DONATION_STORAGE_KEY = "smartGarbageDonations";
const FUND_USAGE_STORAGE_KEY = "smartGarbageFundUsage";
const SOCIAL_LINKS_STORAGE_KEY = "smartGarbageSocialLinks";
const ADMIN_ACCOUNT_STORAGE_KEY = "smartGarbageAdminAccount";
const RAZORPAY_KEY = "rzp_test_replace_with_your_key";
const MUNICIPAL_UPI_ID = "municipality@upi";

const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "admin123",
};

const CATEGORY_MAP = {
  "Garbage Pile": "garbage_pile",
  "Drainage Leakage": "drainage_leakage",
  "Dead Animal": "dead_animal",
  "Road Damage": "road_damage",
  "Street Sweeping Required": "street_sweeping",
  "Public Dustbin Overflow": "dustbin_overflow",
};

const categoryOrder = [
  "garbage_pile",
  "drainage_leakage",
  "dead_animal",
  "road_damage",
  "street_sweeping",
  "dustbin_overflow",
];

const languageMap = {
  en: { locale: "en" },
  hi: { locale: "hi" },
  bn: { locale: "hi", fallback: "Bengali ke liye फिलहाल Hindi interface fallback use ho raha hai." },
  te: { locale: "hi", fallback: "Telugu ke liye फिलहाल Hindi interface fallback use ho raha hai." },
  mr: { locale: "hi", fallback: "Marathi ke liye फिलहाल Hindi interface fallback use ho raha hai." },
  ta: { locale: "hi", fallback: "Tamil ke liye फिलहाल Hindi interface fallback use ho raha hai." },
  ur: { locale: "hi", fallback: "Urdu ke liye फिलहाल Hindi interface fallback use ho raha hai." },
  gu: { locale: "hi", fallback: "Gujarati ke liye फिलहाल Hindi interface fallback use ho raha hai." },
  kn: { locale: "hi", fallback: "Kannada ke liye फिलहाल Hindi interface fallback use ho raha hai." },
  ml: { locale: "hi", fallback: "Malayalam ke liye फिलहाल Hindi interface fallback use ho raha hai." },
  or: { locale: "hi", fallback: "Odia ke liye फिलहाल Hindi interface fallback use ho raha hai." },
  pa: { locale: "hi", fallback: "Punjabi ke liye फिलहाल Hindi interface fallback use ho raha hai." },
  as: { locale: "hi", fallback: "Assamese ke liye फिलहाल Hindi interface fallback use ho raha hai." },
  mai: { locale: "hi", fallback: "Maithili ke liye फिलहाल Hindi interface fallback use ho raha hai." },
  sa: { locale: "hi", fallback: "Sanskrit ke liye फिलहाल Hindi interface fallback use ho raha hai." },
  ks: { locale: "hi", fallback: "Kashmiri ke liye फिलहाल Hindi interface fallback use ho raha hai." },
  ne: { locale: "hi", fallback: "Nepali ke liye फिलहाल Hindi interface fallback use ho raha hai." },
  gom: { locale: "hi", fallback: "Konkani ke liye फिलहाल Hindi interface fallback use ho raha hai." },
  sd: { locale: "hi", fallback: "Sindhi ke liye फिलहाल Hindi interface fallback use ho raha hai." },
  doi: { locale: "hi", fallback: "Dogri ke liye फिलहाल Hindi interface fallback use ho raha hai." },
  mni: { locale: "hi", fallback: "Manipuri ke liye फिलहाल Hindi interface fallback use ho raha hai." },
  brx: { locale: "hi", fallback: "Bodo ke liye फिलहाल Hindi interface fallback use ho raha hai." },
  sat: { locale: "hi", fallback: "Santali ke liye फिलहाल Hindi interface fallback use ho raha hai." },
};

const translations = {
  en: {
    tabCitizen: "Citizen Portal",
    tabAdmin: "Admin Panel",
    brandEyebrow: "Municipal e-Governance Platform",
    brandTitle: "Smart Garbage Reporting & Analytics System",
    languageLabel: "Indian Language",
    heroBadge: "Clean city operations",
    heroHeading: "Fast complaint reporting, transparent tracking, and actionable municipal insights.",
    heroDescription: "Citizens can report sanitation issues with image evidence, while administrators monitor complaints, update progress, and review live analytics from one unified dashboard.",
    metricTotal: "Total Complaints",
    metricPending: "Pending Cases",
    metricCompleted: "Completed Cases",
    panelTitle: "Service Snapshot",
    panelValue: "Live Monitoring",
    service1: "Garbage collection response",
    service1Value: "Priority Enabled",
    service2: "Ward complaint tracking",
    service2Value: "Real-time Status",
    service3: "Visual evidence archive",
    service3Value: "Secure Browser Storage",
    photoTag1: "Urban India",
    photoHeading1: "Modern city monitoring for cleaner public spaces",
    photoDesc1: "Digitally connect citizens and municipal teams with faster reporting and visible action.",
    photoTag2: "Community View",
    photoHeading2: "Local neighborhoods matter",
    photoTag3: "Smart Governance",
    photoHeading3: "Data-backed city services",
    civicEyebrow: "Public Service Mission",
    civicHeading: "Cleaner wards, safer roads, and better civic response across Indian neighborhoods",
    civicDescription: "Use the portal to report issues early, attach evidence, and help municipal teams resolve complaints with better visibility.",
    formEyebrow: "Citizen Complaint Submission",
    formHeading: "Report a sanitation or civic issue",
    fullName: "Full Name",
    phoneNumber: "Phone Number",
    location: "Location / Ward Number",
    liveLocationTitle: "Share Live Location",
    liveLocationDescription: "Citizen can send current GPS location directly to admin for faster complaint response.",
    getLocationButton: "Get Live Location",
    liveLocationEmpty: "Live location not added yet.",
    liveLocationFetching: "Fetching live location...",
    liveLocationAdded: "Live location added successfully.",
    liveLocationUnavailable: "Location access failed. Please allow GPS permission and try again.",
    liveLocationDenied: "Location permission denied by citizen.",
    category: "Complaint Category",
    description: "Complaint Description",
    uploadImage: "Upload Image Evidence",
    uploadSupport: "Supported: JPG, PNG, WEBP",
    noImageSelected: "No image selected",
    submitComplaint: "Submit Complaint",
    adminEyebrow: "Restricted Access",
    adminHeading: "Admin authentication required",
    adminDescription: "Only authorized municipal administrators can open the dashboard. Please sign in with admin credentials to continue.",
    adminUsername: "Admin Username",
    adminPassword: "Admin Password",
    adminLogin: "Login to Admin Panel",
    signupTab: "Sign Up",
    forgotTab: "Forgot Password",
    signupUsernameLabel: "Admin Username",
    signupMobileLabel: "Mobile Number",
    signupPasswordLabel: "Password",
    signupConfirmPasswordLabel: "Confirm Password",
    signupButtonText: "Create Admin Account",
    forgotUsernameLabel: "Admin Username",
    forgotMobileLabel: "Registered Mobile Number",
    forgotNewPasswordLabel: "New Password",
    forgotConfirmPasswordLabel: "Confirm New Password",
    forgotButtonText: "Reset Password",
    adminSession: "Authorized Session",
    adminDashboard: "Municipal Complaint Control Center",
    logout: "Logout",
    statTotal: "Total Complaints",
    statPending: "Pending Complaints",
    statConfirmed: "Confirmed Complaints",
    statCompleted: "Completed Complaints",
    totalDonationsLabel: "Total Donations",
    fundUsageLabel: "Fund Used",
    analyticsEyebrow: "Analytics Dashboard",
    analyticsHeading: "Complaint status distribution",
    managementEyebrow: "Complaint Management",
    managementHeading: "Review and update complaint status",
    thId: "ID",
    thCitizen: "Citizen",
    thContact: "Contact",
    thLocation: "Location",
    thLiveLocation: "Live Location",
    thCategory: "Category",
    thDonation: "Donation",
    thStatus: "Status",
    thEvidence: "Evidence",
    thUpdate: "Update",
    noRecords: "No complaint records available.",
    noRecordsDesc: "Citizen submissions will appear here automatically.",
    noImage: "No Image",
    noLiveLocation: "No Live Location",
    noDonation: "No Donation",
    pending: "Pending",
    confirmed: "Confirmed",
    completed: "Completed",
    categoryPlaceholder: "Select category",
    category_garbage_pile: "Garbage Pile",
    category_drainage_leakage: "Drainage Leakage",
    category_dead_animal: "Dead Animal",
    category_road_damage: "Road Damage",
    category_street_sweeping: "Street Sweeping Required",
    category_dustbin_overflow: "Public Dustbin Overflow",
    donationTitle: "Support Cleanliness Fund",
    donationDescription: "Citizen can optionally contribute a support donation for sanitation drives and emergency response efforts.",
    donationAmountLabel: "Donation Amount",
    donationAmountPlaceholder: "Enter amount in INR",
    donationMethodLabel: "Donation Method",
    donationMethodPlaceholder: "Select method",
    donorName: "Donor Name",
    donorPhone: "Phone Number",
    standaloneDonationAmount: "Donation Amount (INR)",
    standaloneDonationMethod: "Payment Method",
    donationPurpose: "Purpose / Note",
    donationPurposePlaceholder: "Optional note for how the donation should support cleanliness work.",
    donationModuleEyebrow: "Citizen Donation Module",
    donationModuleHeading: "Support city cleanliness and rapid response",
    donationStripTitle: "Municipal Cleanliness Support Fund",
    donationStripDescription: "Citizens can voluntarily contribute to ward cleanup drives, emergency sanitation response, and public waste infrastructure upgrades.",
    donationStripBadge: "Secure UPI, QR & Razorpay Ready",
    generateUpi: "Generate UPI Link",
    generateQr: "Show QR Code",
    payRazorpay: "Pay with Razorpay",
    saveDonation: "Save Donation Record",
    upiPanelTitle: "UPI Link",
    upiPanelMeta: "Tap-to-pay support",
    upiLinkPlaceholder: "Generate a UPI payment link",
    qrPanelTitle: "QR Code",
    qrPanelMeta: "Scan and pay",
    qrPlaceholder: "QR code will appear here",
    donationHistoryEyebrow: "Donation History",
    donationHistoryHeading: "Recent citizen contributions",
    donationHistoryEmpty: "No donation records yet.",
    donationHistoryEmptyDesc: "Citizen donation entries will appear here.",
    fundUsageEyebrow: "Fund Usage Tracking",
    fundUsageHeading: "Track how collected funds are allocated",
    usageCategory: "Usage Category",
    usageAmount: "Amount Used (INR)",
    usageCategoryPlaceholder: "Example: Ward cleanup drive",
    usageAmountPlaceholder: "Enter amount used",
    addFundUsage: "Add Fund Usage",
    fundUsageEmpty: "No fund usage added yet.",
    fundUsageEmptyDesc: "Admin fund allocation entries will appear here.",
    paymentMethodChartEyebrow: "Donation Analytics",
    paymentMethodChartHeading: "Payment method breakdown",
    paymentMethodNoData: "No donation method data available.",
    socialCitizenEyebrow: "Official Social Media",
    socialCitizenHeading: "Follow municipal updates and announcements",
    socialAdminEyebrow: "Social Media Manager",
    socialAdminHeading: "Add official social media links for citizens",
    youtubeLabel: "YouTube Link",
    facebookLabel: "Facebook Link",
    instagramLabel: "Instagram Link",
    twitterLabel: "Twitter / X Link",
    saveSocialLinksText: "Save Social Links",
    socialEmpty: "No official social links added yet.",
    socialEmptyDesc: "Admin social media updates will appear here for citizens.",
    socialLinksSaved: "Social media links saved successfully.",
    notificationLanguageChanged: "Frontend language updated successfully.",
    notificationSubmitted: "Complaint submitted successfully.",
    notificationAdminGranted: "Welcome to the municipal admin dashboard.",
    notificationAdminDenied: "Invalid admin username or password.",
    notificationSignupSuccess: "Admin account created successfully.",
    notificationSignupExists: "Admin username already exists.",
    notificationPasswordMismatch: "Passwords do not match.",
    notificationForgotSuccess: "Admin password reset successfully.",
    notificationForgotFailed: "Username and mobile number do not match.",
    notificationLoggedOut: "Admin session ended successfully.",
    notificationLoginRequired: "Please login as admin to update complaint status.",
    notificationStatusUpdated: "Complaint status updated successfully.",
    donationSaved: "Donation record saved successfully.",
    donationRazorpayMissing: "Add your Razorpay test/live key in script.js to enable online checkout.",
    donationUpiGenerated: "UPI payment link generated.",
    donationQrGenerated: "Donation QR code generated.",
    donationPaySuccess: "Donation payment captured successfully.",
    fundUsageSaved: "Fund usage entry saved successfully."
  },
  hi: {
    tabCitizen: "नागरिक पोर्टल",
    tabAdmin: "एडमिन पैनल",
    brandEyebrow: "नगरपालिका ई-गवर्नेंस प्लेटफ़ॉर्म",
    brandTitle: "स्मार्ट कचरा रिपोर्टिंग और एनालिटिक्स सिस्टम",
    languageLabel: "भारतीय भाषा",
    heroBadge: "स्वच्छ शहर संचालन",
    heroHeading: "तेज़ शिकायत दर्ज करना, पारदर्शी ट्रैकिंग और उपयोगी नगरपालिका जानकारी।",
    heroDescription: "नागरिक फोटो के साथ सफाई संबंधी शिकायत दर्ज कर सकते हैं, जबकि प्रशासक एक ही डैशबोर्ड से निगरानी, प्रगति और एनालिटिक्स देख सकते हैं।",
    metricTotal: "कुल शिकायतें",
    metricPending: "लंबित मामले",
    metricCompleted: "पूर्ण मामले",
    panelTitle: "सेवा स्थिति",
    panelValue: "लाइव मॉनिटरिंग",
    service1: "कचरा संग्रह प्रतिक्रिया",
    service1Value: "प्राथमिकता सक्रिय",
    service2: "वार्ड शिकायत ट्रैकिंग",
    service2Value: "रियल-टाइम स्थिति",
    service3: "दृश्य प्रमाण संग्रह",
    service3Value: "सुरक्षित ब्राउज़र स्टोरेज",
    photoTag1: "शहरी भारत",
    photoHeading1: "स्वच्छ सार्वजनिक स्थानों के लिए आधुनिक शहर निगरानी",
    photoDesc1: "नागरिकों और नगरपालिका टीमों को तेज़ रिपोर्टिंग और स्पष्ट कार्रवाई से जोड़ें।",
    photoTag2: "समुदाय दृश्य",
    photoHeading2: "स्थानीय मोहल्लों की अहमियत",
    photoTag3: "स्मार्ट प्रशासन",
    photoHeading3: "डेटा आधारित शहर सेवाएँ",
    civicEyebrow: "लोक सेवा मिशन",
    civicHeading: "भारतीय मोहल्लों में स्वच्छ वार्ड, सुरक्षित सड़कें और बेहतर नागरिक प्रतिक्रिया",
    civicDescription: "जल्दी शिकायत दर्ज करें, प्रमाण जोड़ें और नगरपालिका टीमों को बेहतर दृश्यता के साथ समाधान में मदद करें।",
    formEyebrow: "नागरिक शिकायत जमा",
    formHeading: "सफाई या नागरिक समस्या की रिपोर्ट करें",
    fullName: "पूरा नाम",
    phoneNumber: "फ़ोन नंबर",
    location: "स्थान / वार्ड नंबर",
    liveLocationTitle: "लाइव लोकेशन साझा करें",
    liveLocationDescription: "नागरिक अपनी वर्तमान GPS लोकेशन सीधे एडमिन को भेज सकता है ताकि शिकायत पर जल्दी कार्रवाई हो।",
    getLocationButton: "लाइव लोकेशन लें",
    liveLocationEmpty: "अभी लाइव लोकेशन जोड़ी नहीं गई है।",
    liveLocationFetching: "लाइव लोकेशन प्राप्त की जा रही है...",
    liveLocationAdded: "लाइव लोकेशन सफलतापूर्वक जोड़ दी गई।",
    liveLocationUnavailable: "लोकेशन एक्सेस विफल रहा। कृपया GPS अनुमति दें और फिर प्रयास करें।",
    liveLocationDenied: "नागरिक ने लोकेशन अनुमति अस्वीकार कर दी।",
    category: "शिकायत श्रेणी",
    description: "शिकायत विवरण",
    uploadImage: "फोटो प्रमाण अपलोड करें",
    uploadSupport: "समर्थित: JPG, PNG, WEBP",
    noImageSelected: "कोई फोटो चयनित नहीं",
    submitComplaint: "शिकायत जमा करें",
    adminEyebrow: "प्रतिबंधित प्रवेश",
    adminHeading: "एडमिन प्रमाणीकरण आवश्यक",
    adminDescription: "केवल अधिकृत नगरपालिका प्रशासक ही डैशबोर्ड खोल सकते हैं। कृपया लॉगिन करें।",
    adminUsername: "एडमिन यूज़रनेम",
    adminPassword: "एडमिन पासवर्ड",
    adminLogin: "एडमिन पैनल में लॉगिन करें",
    signupTab: "साइन अप",
    forgotTab: "पासवर्ड भूल गए",
    signupUsernameLabel: "एडमिन यूज़रनेम",
    signupMobileLabel: "मोबाइल नंबर",
    signupPasswordLabel: "पासवर्ड",
    signupConfirmPasswordLabel: "पासवर्ड की पुष्टि करें",
    signupButtonText: "एडमिन अकाउंट बनाएं",
    forgotUsernameLabel: "एडमिन यूज़रनेम",
    forgotMobileLabel: "पंजीकृत मोबाइल नंबर",
    forgotNewPasswordLabel: "नया पासवर्ड",
    forgotConfirmPasswordLabel: "नए पासवर्ड की पुष्टि करें",
    forgotButtonText: "पासवर्ड रीसेट करें",
    adminSession: "अधिकृत सत्र",
    adminDashboard: "नगरपालिका शिकायत नियंत्रण केंद्र",
    logout: "लॉगआउट",
    statTotal: "कुल शिकायतें",
    statPending: "लंबित शिकायतें",
    statConfirmed: "पुष्ट शिकायतें",
    statCompleted: "पूर्ण शिकायतें",
    totalDonationsLabel: "कुल दान",
    fundUsageLabel: "उपयोग की गई राशि",
    analyticsEyebrow: "एनालिटिक्स डैशबोर्ड",
    analyticsHeading: "शिकायत स्थिति वितरण",
    managementEyebrow: "शिकायत प्रबंधन",
    managementHeading: "शिकायत की स्थिति देखें और अपडेट करें",
    thId: "आईडी",
    thCitizen: "नागरिक",
    thContact: "संपर्क",
    thLocation: "स्थान",
    thLiveLocation: "लाइव लोकेशन",
    thCategory: "श्रेणी",
    thDonation: "दान",
    thStatus: "स्थिति",
    thEvidence: "प्रमाण",
    thUpdate: "अपडेट",
    noRecords: "कोई शिकायत रिकॉर्ड उपलब्ध नहीं है।",
    noRecordsDesc: "नागरिक द्वारा भेजी गई शिकायतें यहाँ दिखाई देंगी।",
    noImage: "फोटो नहीं",
    noLiveLocation: "लाइव लोकेशन नहीं",
    noDonation: "कोई दान नहीं",
    pending: "लंबित",
    confirmed: "पुष्ट",
    completed: "पूर्ण",
    categoryPlaceholder: "श्रेणी चुनें",
    category_garbage_pile: "कचरे का ढेर",
    category_drainage_leakage: "नाली रिसाव",
    category_dead_animal: "मृत पशु",
    category_road_damage: "सड़क क्षति",
    category_street_sweeping: "सड़क सफाई आवश्यक",
    category_dustbin_overflow: "सार्वजनिक डस्टबिन भरा हुआ",
    donationTitle: "स्वच्छता सहायता निधि",
    donationDescription: "नागरिक स्वेच्छा से स्वच्छता अभियान और आपात प्रतिक्रिया के लिए सहायता राशि दे सकता है।",
    donationAmountLabel: "दान राशि",
    donationAmountPlaceholder: "राशि INR में दर्ज करें",
    donationMethodLabel: "दान विधि",
    donationMethodPlaceholder: "विधि चुनें",
    donorName: "दाता का नाम",
    donorPhone: "फ़ोन नंबर",
    standaloneDonationAmount: "दान राशि (INR)",
    standaloneDonationMethod: "भुगतान विधि",
    donationPurpose: "उद्देश्य / टिप्पणी",
    donationPurposePlaceholder: "स्वच्छता कार्य के लिए दान का उपयोग कैसे हो, यह वैकल्पिक टिप्पणी लिखें।",
    donationModuleEyebrow: "नागरिक दान मॉड्यूल",
    donationModuleHeading: "शहर की स्वच्छता और त्वरित प्रतिक्रिया में सहयोग करें",
    donationStripTitle: "नगरपालिका स्वच्छता सहायता निधि",
    donationStripDescription: "नागरिक वार्ड सफाई अभियान, आपात स्वच्छता प्रतिक्रिया और सार्वजनिक कचरा ढांचे के लिए स्वैच्छिक योगदान दे सकते हैं।",
    donationStripBadge: "UPI, QR और Razorpay समर्थित",
    generateUpi: "UPI लिंक बनाएं",
    generateQr: "QR कोड दिखाएं",
    payRazorpay: "Razorpay से भुगतान करें",
    saveDonation: "दान रिकॉर्ड सेव करें",
    upiPanelTitle: "UPI लिंक",
    upiPanelMeta: "टैप करके भुगतान करें",
    upiLinkPlaceholder: "UPI भुगतान लिंक यहाँ दिखेगा",
    qrPanelTitle: "QR कोड",
    qrPanelMeta: "स्कैन करके भुगतान करें",
    qrPlaceholder: "QR कोड यहाँ दिखेगा",
    donationHistoryEyebrow: "दान इतिहास",
    donationHistoryHeading: "हाल की नागरिक योगदान प्रविष्टियाँ",
    donationHistoryEmpty: "अभी तक कोई दान रिकॉर्ड नहीं है।",
    donationHistoryEmptyDesc: "नागरिक दान प्रविष्टियाँ यहाँ दिखाई देंगी।",
    fundUsageEyebrow: "फंड उपयोग ट्रैकिंग",
    fundUsageHeading: "संग्रहित राशि का उपयोग ट्रैक करें",
    usageCategory: "उपयोग श्रेणी",
    usageAmount: "उपयोग की गई राशि (INR)",
    usageCategoryPlaceholder: "उदाहरण: वार्ड सफाई अभियान",
    usageAmountPlaceholder: "उपयोग राशि दर्ज करें",
    addFundUsage: "फंड उपयोग जोड़ें",
    fundUsageEmpty: "अभी तक कोई फंड उपयोग प्रविष्टि नहीं है।",
    fundUsageEmptyDesc: "एडमिन फंड आवंटन प्रविष्टियाँ यहाँ दिखाई देंगी।",
    paymentMethodChartEyebrow: "दान एनालिटिक्स",
    paymentMethodChartHeading: "भुगतान विधि वितरण",
    paymentMethodNoData: "अभी कोई दान भुगतान डेटा उपलब्ध नहीं है।",
    socialCitizenEyebrow: "आधिकारिक सोशल मीडिया",
    socialCitizenHeading: "नगरपालिका अपडेट और घोषणाओं के लिए फॉलो करें",
    socialAdminEyebrow: "सोशल मीडिया मैनेजर",
    socialAdminHeading: "नागरिकों के लिए आधिकारिक सोशल मीडिया लिंक जोड़ें",
    youtubeLabel: "YouTube लिंक",
    facebookLabel: "Facebook लिंक",
    instagramLabel: "Instagram लिंक",
    twitterLabel: "Twitter / X लिंक",
    saveSocialLinksText: "सोशल लिंक सेव करें",
    socialEmpty: "अभी तक कोई आधिकारिक सोशल लिंक नहीं जोड़ा गया है।",
    socialEmptyDesc: "एडमिन सोशल मीडिया अपडेट यहाँ दिखाई देंगे।",
    socialLinksSaved: "सोशल मीडिया लिंक सफलतापूर्वक सेव हो गए।",
    notificationLanguageChanged: "फ्रंटएंड भाषा सफलतापूर्वक अपडेट हो गई।",
    notificationSubmitted: "शिकायत सफलतापूर्वक जमा हो गई।",
    notificationAdminGranted: "नगरपालिका एडमिन डैशबोर्ड में आपका स्वागत है।",
    notificationAdminDenied: "एडमिन यूज़रनेम या पासवर्ड गलत है।",
    notificationSignupSuccess: "एडमिन अकाउंट सफलतापूर्वक बन गया।",
    notificationSignupExists: "यह एडमिन यूज़रनेम पहले से मौजूद है।",
    notificationPasswordMismatch: "पासवर्ड मेल नहीं खा रहे हैं।",
    notificationForgotSuccess: "एडमिन पासवर्ड सफलतापूर्वक रीसेट हो गया।",
    notificationForgotFailed: "यूज़रनेम और मोबाइल नंबर मेल नहीं खाते।",
    notificationLoggedOut: "एडमिन सत्र सफलतापूर्वक समाप्त हुआ।",
    notificationLoginRequired: "स्थिति अपडेट करने के लिए एडमिन लॉगिन करें।",
    notificationStatusUpdated: "शिकायत की स्थिति सफलतापूर्वक अपडेट हो गई।",
    donationSaved: "दान रिकॉर्ड सफलतापूर्वक सेव हो गया।",
    donationRazorpayMissing: "ऑनलाइन भुगतान सक्षम करने के लिए script.js में अपना Razorpay key जोड़ें।",
    donationUpiGenerated: "UPI भुगतान लिंक तैयार हो गया।",
    donationQrGenerated: "दान QR कोड तैयार हो गया।",
    donationPaySuccess: "दान भुगतान सफलतापूर्वक दर्ज हो गया।",
    fundUsageSaved: "फंड उपयोग प्रविष्टि सफलतापूर्वक सेव हो गई।"
  }
};

const complaintForm = document.getElementById("complaintForm");
const donationForm = document.getElementById("donationForm");
const fundUsageForm = document.getElementById("fundUsageForm");
const adminLoginForm = document.getElementById("adminLoginForm");
const adminSignupForm = document.getElementById("adminSignupForm");
const adminForgotForm = document.getElementById("adminForgotForm");
const adminLogoutButton = document.getElementById("adminLogoutButton");
const imageUpload = document.getElementById("imageUpload");
const imagePreview = document.getElementById("imagePreview");
const getLocationButton = document.getElementById("getLocationButton");
const liveLocationStatus = document.getElementById("liveLocationStatus");
const complaintsTableBody = document.getElementById("complaintsTableBody");
const donationHistoryList = document.getElementById("donationHistoryList");
const fundUsageList = document.getElementById("fundUsageList");
const socialLinksForm = document.getElementById("socialLinksForm");
const socialLinksList = document.getElementById("socialLinksList");
const upiLinkDisplay = document.getElementById("upiLinkDisplay");
const qrCodeContainer = document.getElementById("qrCodeContainer");
const generateUpiButton = document.getElementById("generateUpiButton");
const generateQrButton = document.getElementById("generateQrButton");
const payRazorpayButton = document.getElementById("payRazorpayButton");
const notificationContainer = document.getElementById("notificationContainer");
const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");
const adminLoginView = document.getElementById("adminLoginView");
const adminDashboardView = document.getElementById("adminDashboardView");
const languageSelect = document.getElementById("languageSelect");
const authTabButtons = document.querySelectorAll(".admin-auth-tab");

const statsElements = {
  total: document.getElementById("totalComplaints"),
  pending: document.getElementById("pendingComplaints"),
  confirmed: document.getElementById("confirmedComplaints"),
  completed: document.getElementById("completedComplaints"),
  donations: document.getElementById("totalDonations"),
  fundUsed: document.getElementById("fundUsed"),
  heroTotal: document.getElementById("heroTotalComplaints"),
  heroPending: document.getElementById("heroPendingComplaints"),
  heroCompleted: document.getElementById("heroCompletedComplaints"),
};

let complaintChart;
let donationChart;
let selectedImageData = "";
let selectedLiveLocation = null;
let currentLocale = "en";

const defaultComplaints = [
  {
    id: generateId(),
    fullName: "Rakesh Sharma",
    phoneNumber: "9876543210",
    location: "Ward 7, Lakeview Road",
    liveLocation: null,
    category: "garbage_pile",
    donationAmount: 250,
    donationMethod: "UPI",
    description: "Garbage has been accumulating near the corner for the past two days.",
    image: "",
    status: "Pending",
    createdAt: new Date().toLocaleString(),
  },
  {
    id: generateId(),
    fullName: "Meena Patel",
    phoneNumber: "9123456780",
    location: "Ward 2, Central Market",
    liveLocation: null,
    category: "drainage_leakage",
    donationAmount: 0,
    donationMethod: "",
    description: "Drain water is overflowing beside the vegetable market entrance.",
    image: "",
    status: "Confirmed",
    createdAt: new Date().toLocaleString(),
  },
];

initializeApp();

function initializeApp() {
  seedDefaultComplaints();
  bindEvents();
  initializeLanguage();
  switchAdminAuthView("login");
  resetDonationPaymentViews();
  resetImagePreview();
  resetLiveLocationStatus();
  renderAll();
  updateAdminAccessView();
}

function bindEvents() {
  complaintForm.addEventListener("submit", handleFormSubmit);
  donationForm.addEventListener("submit", handleDonationRecordSubmit);
  fundUsageForm.addEventListener("submit", handleFundUsageSubmit);
  socialLinksForm.addEventListener("submit", handleSocialLinksSubmit);
  adminLoginForm.addEventListener("submit", handleAdminLogin);
  adminSignupForm.addEventListener("submit", handleAdminSignup);
  adminForgotForm.addEventListener("submit", handleForgotPassword);
  adminLogoutButton.addEventListener("click", handleAdminLogout);
  imageUpload.addEventListener("change", handleImageSelection);
  getLocationButton.addEventListener("click", captureLiveLocation);
  languageSelect.addEventListener("change", handleLanguageSelection);
  generateUpiButton.addEventListener("click", generateUpiLink);
  generateQrButton.addEventListener("click", generateQrCode);
  payRazorpayButton.addEventListener("click", launchRazorpayPayment);
  authTabButtons.forEach((button) => {
    button.addEventListener("click", () => switchAdminAuthView(button.dataset.authView));
  });

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => switchTab(button.dataset.tab));
  });

  complaintsTableBody.addEventListener("change", (event) => {
    if (!event.target.classList.contains("status-select")) return;
    updateComplaintStatus(event.target.dataset.id, event.target.value);
  });

  window.addEventListener("storage", (event) => {
    if ([STORAGE_KEY, DONATION_STORAGE_KEY, FUND_USAGE_STORAGE_KEY, SOCIAL_LINKS_STORAGE_KEY].includes(event.key)) {
      renderAll();
    }
    if (event.key === ADMIN_SESSION_KEY) {
      updateAdminAccessView();
    }
  });
}

function initializeLanguage() {
  const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) || "en";
  languageSelect.value = savedLanguage;
  applyLanguage(savedLanguage, false);
}

function handleLanguageSelection() {
  const selectedLanguage = languageSelect.value;
  localStorage.setItem(LANGUAGE_STORAGE_KEY, selectedLanguage);
  applyLanguage(selectedLanguage, true);
}

function applyLanguage(languageCode, notifyUser) {
  const config = languageMap[languageCode] || languageMap.en;
  currentLocale = config.locale;
  document.documentElement.lang = languageCode;
  paintStaticText();
  renderAll();

  if (notifyUser) {
    showNotification("Info", config.fallback || text("notificationLanguageChanged"), config.fallback ? "info" : "success");
  }
}

function paintStaticText() {
  const brand = document.querySelector(".brand");
  brand.querySelector(".eyebrow").textContent = text("brandEyebrow");
  brand.querySelector("h1").textContent = text("brandTitle");
  document.querySelector(".language-switcher label").textContent = text("languageLabel");

  const tabCitizen = document.querySelector('[data-tab="citizen"]');
  const tabAdmin = document.querySelector('[data-tab="admin"]');
  tabCitizen.innerHTML = `<i class="fa-solid fa-user-group"></i> ${text("tabCitizen")}`;
  tabAdmin.innerHTML = `<i class="fa-solid fa-chart-line"></i> ${text("tabAdmin")}`;

  document.querySelector(".hero-badge").innerHTML = `<i class="fa-solid fa-shield-heart"></i> ${text("heroBadge")}`;
  document.querySelector(".hero-copy h2").textContent = text("heroHeading");
  document.querySelector(".hero-copy p").textContent = text("heroDescription");

  const heroMetricSpans = document.querySelectorAll(".hero-metrics .metric-card span");
  heroMetricSpans[0].textContent = text("metricTotal");
  heroMetricSpans[1].textContent = text("metricPending");
  heroMetricSpans[2].textContent = text("metricCompleted");

  const panelHeader = document.querySelector(".panel-header");
  panelHeader.querySelector("span").innerHTML = `<i class="fa-solid fa-satellite-dish"></i> ${text("panelTitle")}`;
  panelHeader.querySelector("strong").textContent = text("panelValue");

  const serviceItems = document.querySelectorAll(".service-item");
  serviceItems[0].querySelector("span").textContent = text("service1");
  serviceItems[0].querySelector("strong").textContent = text("service1Value");
  serviceItems[1].querySelector("span").textContent = text("service2");
  serviceItems[1].querySelector("strong").textContent = text("service2Value");
  serviceItems[2].querySelector("span").textContent = text("service3");
  serviceItems[2].querySelector("strong").textContent = text("service3Value");

  const photos = document.querySelectorAll(".photo-feature");
  photos[0].querySelector(".photo-tag").textContent = text("photoTag1");
  photos[0].querySelector("h3").textContent = text("photoHeading1");
  photos[0].querySelector("p").textContent = text("photoDesc1");
  photos[1].querySelector(".photo-tag").textContent = text("photoTag2");
  photos[1].querySelector("h3").textContent = text("photoHeading2");
  photos[2].querySelector(".photo-tag").textContent = text("photoTag3");
  photos[2].querySelector("h3").textContent = text("photoHeading3");

  const civic = document.querySelector(".civic-banner-copy");
  civic.querySelector(".eyebrow").textContent = text("civicEyebrow");
  civic.querySelector("h3").textContent = text("civicHeading");
  civic.querySelector("p:last-child").textContent = text("civicDescription");

  const formHeading = document.querySelector(".form-card .section-heading");
  formHeading.querySelector(".eyebrow").textContent = text("formEyebrow");
  formHeading.querySelector("h3").textContent = text("formHeading");

  setLabelText(document.getElementById("fullName"), text("fullName"));
  setLabelText(document.getElementById("phoneNumber"), text("phoneNumber"));
  setLabelText(document.getElementById("location"), text("location"));
  setLabelText(document.getElementById("category"), text("category"));
  setLabelText(document.getElementById("description"), text("description"));
  document.getElementById("fullName").placeholder = text("fullName");
  document.getElementById("phoneNumber").placeholder = text("phoneNumber");
  document.getElementById("location").placeholder = text("location");
  document.getElementById("description").placeholder = text("description");

  document.getElementById("liveLocationTitle").textContent = text("liveLocationTitle");
  document.getElementById("liveLocationDescription").textContent = text("liveLocationDescription");
  document.getElementById("getLocationButtonText").textContent = text("getLocationButton");
  if (!selectedLiveLocation) resetLiveLocationStatus();

  const categorySelect = document.getElementById("category");
  categorySelect.options[0].text = text("categoryPlaceholder");
  categoryOrder.forEach((category, index) => {
    categorySelect.options[index + 1].value = category;
    categorySelect.options[index + 1].text = getCategoryLabel(category);
  });

  const donationMethodSelect = document.getElementById("donationMethod");
  donationMethodSelect.options[0].text = text("donationMethodPlaceholder");

  const uploadBlock = document.querySelector(".file-upload");
  uploadBlock.querySelector("span").textContent = text("uploadImage");
  uploadBlock.querySelector("small").textContent = text("uploadSupport");

  complaintForm.querySelector('button[type="submit"]').innerHTML = `<i class="fa-solid fa-paper-plane"></i> ${text("submitComplaint")}`;

  const donationModuleHeading = document.querySelector(".donation-module-card .section-heading");
  donationModuleHeading.querySelector(".eyebrow").textContent = text("donationModuleEyebrow");
  donationModuleHeading.querySelector("h3").textContent = text("donationModuleHeading");
  document.querySelector(".donation-hero-strip strong").textContent = text("donationStripTitle");
  document.querySelector(".donation-hero-strip p").textContent = text("donationStripDescription");
  document.querySelector(".donation-badge").textContent = text("donationStripBadge");
  setLabelText(document.getElementById("donorName"), text("donorName"));
  setLabelText(document.getElementById("donorPhone"), text("donorPhone"));
  setLabelText(document.getElementById("standaloneDonationAmount"), text("standaloneDonationAmount"));
  setLabelText(document.getElementById("standaloneDonationMethod"), text("standaloneDonationMethod"));
  setLabelText(document.getElementById("donationPurpose"), text("donationPurpose"));
  document.getElementById("donorName").placeholder = text("donorName");
  document.getElementById("donorPhone").placeholder = text("donorPhone");
  document.getElementById("standaloneDonationAmount").placeholder = text("donationAmountPlaceholder");
  document.getElementById("donationPurpose").placeholder = text("donationPurposePlaceholder");
  const standaloneMethod = document.getElementById("standaloneDonationMethod");
  standaloneMethod.options[0].text = text("donationMethodPlaceholder");
  generateUpiButton.innerHTML = `<i class="fa-solid fa-mobile-screen-button"></i> ${text("generateUpi")}`;
  generateQrButton.innerHTML = `<i class="fa-solid fa-qrcode"></i> ${text("generateQr")}`;
  payRazorpayButton.innerHTML = `<i class="fa-solid fa-credit-card"></i> ${text("payRazorpay")}`;
  donationForm.querySelector('button[type="submit"]').innerHTML = `<i class="fa-solid fa-bookmark"></i> ${text("saveDonation")}`;

  const paymentPanels = document.querySelectorAll(".payment-panel");
  paymentPanels[0].querySelector("h4").textContent = text("upiPanelTitle");
  paymentPanels[0].querySelector("span").textContent = text("upiPanelMeta");
  paymentPanels[1].querySelector("h4").textContent = text("qrPanelTitle");
  paymentPanels[1].querySelector("span").textContent = text("qrPanelMeta");
  if (upiLinkDisplay.dataset.generated !== "true") upiLinkDisplay.textContent = text("upiLinkPlaceholder");
  if (qrCodeContainer.dataset.generated !== "true") qrCodeContainer.innerHTML = `<i class="fa-solid fa-qrcode"></i><span>${text("qrPlaceholder")}</span>`;

  const donationHistoryHeading = document.querySelector(".donation-history-card .section-heading");
  donationHistoryHeading.querySelector(".eyebrow").textContent = text("donationHistoryEyebrow");
  donationHistoryHeading.querySelector("h3").textContent = text("donationHistoryHeading");

  document.getElementById("socialCitizenEyebrow").textContent = text("socialCitizenEyebrow");
  document.getElementById("socialCitizenHeading").textContent = text("socialCitizenHeading");

  const adminLoginCard = document.querySelector(".admin-login-card");
  adminLoginCard.querySelector(".eyebrow").textContent = text("adminEyebrow");
  adminLoginCard.querySelector("h3").textContent = text("adminHeading");
  adminLoginCard.querySelector(".admin-copy").textContent = text("adminDescription");
  setLabelText(document.getElementById("adminUsername"), text("adminUsername"));
  setLabelText(document.getElementById("adminPassword"), text("adminPassword"));
  document.getElementById("adminUsername").placeholder = text("adminUsername");
  document.getElementById("adminPassword").placeholder = text("adminPassword");
  adminLoginForm.querySelector(".primary-button").innerHTML = `<i class="fa-solid fa-lock-open"></i> ${text("adminLogin")}`;
  document.getElementById("loginTabButton").textContent = text("adminLogin");
  document.getElementById("signupTabButton").textContent = text("signupTab");
  document.getElementById("forgotTabButton").textContent = text("forgotTab");
  setLabelText(document.getElementById("signupUsername"), text("signupUsernameLabel"));
  setLabelText(document.getElementById("signupMobile"), text("signupMobileLabel"));
  setLabelText(document.getElementById("signupPassword"), text("signupPasswordLabel"));
  setLabelText(document.getElementById("signupConfirmPassword"), text("signupConfirmPasswordLabel"));
  setLabelText(document.getElementById("forgotUsername"), text("forgotUsernameLabel"));
  setLabelText(document.getElementById("forgotMobile"), text("forgotMobileLabel"));
  setLabelText(document.getElementById("forgotNewPassword"), text("forgotNewPasswordLabel"));
  setLabelText(document.getElementById("forgotConfirmPassword"), text("forgotConfirmPasswordLabel"));
  document.getElementById("signupUsername").placeholder = text("signupUsernameLabel");
  document.getElementById("signupMobile").placeholder = text("signupMobileLabel");
  document.getElementById("signupPassword").placeholder = text("signupPasswordLabel");
  document.getElementById("signupConfirmPassword").placeholder = text("signupConfirmPasswordLabel");
  document.getElementById("forgotUsername").placeholder = text("forgotUsernameLabel");
  document.getElementById("forgotMobile").placeholder = text("forgotMobileLabel");
  document.getElementById("forgotNewPassword").placeholder = text("forgotNewPasswordLabel");
  document.getElementById("forgotConfirmPassword").placeholder = text("forgotConfirmPasswordLabel");
  document.getElementById("signupButtonText").textContent = text("signupButtonText");
  document.getElementById("forgotButtonText").textContent = text("forgotButtonText");

  const adminToolbar = document.querySelector(".admin-toolbar");
  adminToolbar.querySelector(".eyebrow").textContent = text("adminSession");
  adminToolbar.querySelector("h3").textContent = text("adminDashboard");
  adminLogoutButton.innerHTML = `<i class="fa-solid fa-right-from-bracket"></i> ${text("logout")}`;

  const statLabels = document.querySelectorAll(".stats-grid .stat-card span");
  statLabels[0].textContent = text("statTotal");
  statLabels[1].textContent = text("statPending");
  statLabels[2].textContent = text("statConfirmed");
  statLabels[3].textContent = text("statCompleted");
  statLabels[4].textContent = text("totalDonationsLabel");
  statLabels[5].textContent = text("fundUsageLabel");

  const chartCards = document.querySelectorAll(".chart-card");
  chartCards[0].querySelector(".eyebrow").textContent = text("analyticsEyebrow");
  chartCards[0].querySelector("h3").textContent = text("analyticsHeading");
  chartCards[1].querySelector(".eyebrow").textContent = text("paymentMethodChartEyebrow");
  chartCards[1].querySelector("h3").textContent = text("paymentMethodChartHeading");

  const fundUsageCard = document.querySelector(".fund-usage-card");
  fundUsageCard.querySelector(".eyebrow").textContent = text("fundUsageEyebrow");
  fundUsageCard.querySelector("h3").textContent = text("fundUsageHeading");
  setLabelText(document.getElementById("usageCategory"), text("usageCategory"));
  setLabelText(document.getElementById("usageAmount"), text("usageAmount"));
  document.getElementById("usageCategory").placeholder = text("usageCategoryPlaceholder");
  document.getElementById("usageAmount").placeholder = text("usageAmountPlaceholder");
  fundUsageForm.querySelector("button").innerHTML = `<i class="fa-solid fa-plus"></i> ${text("addFundUsage")}`;

  document.getElementById("socialAdminEyebrow").textContent = text("socialAdminEyebrow");
  document.getElementById("socialAdminHeading").textContent = text("socialAdminHeading");
  setLabelText(document.getElementById("youtubeLink"), text("youtubeLabel"));
  setLabelText(document.getElementById("facebookLink"), text("facebookLabel"));
  setLabelText(document.getElementById("instagramLink"), text("instagramLabel"));
  setLabelText(document.getElementById("twitterLink"), text("twitterLabel"));
  document.getElementById("youtubeLink").placeholder = "https://youtube.com/...";
  document.getElementById("facebookLink").placeholder = "https://facebook.com/...";
  document.getElementById("instagramLink").placeholder = "https://instagram.com/...";
  document.getElementById("twitterLink").placeholder = "https://x.com/...";
  document.getElementById("saveSocialLinksText").textContent = text("saveSocialLinksText");

  const tableHeading = document.querySelector(".table-card .section-heading");
  tableHeading.querySelector(".eyebrow").textContent = text("managementEyebrow");
  tableHeading.querySelector("h3").textContent = text("managementHeading");

  const ths = document.querySelectorAll("thead th");
  [text("thId"), text("thCitizen"), text("thContact"), text("thLocation"), text("thLiveLocation"), text("thCategory"), text("thDonation"), text("thStatus"), text("thEvidence"), text("thUpdate")].forEach((label, index) => {
    ths[index].textContent = label;
  });
}

function setLabelText(input, labelText) {
  const label = input.closest("label");
  if (label && label.firstChild && label.firstChild.nodeType === Node.TEXT_NODE) {
    label.firstChild.textContent = `${labelText}\n                  `;
  }
}

function seedDefaultComplaints() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultComplaints));
  }
}

function handleImageSelection(event) {
  const [file] = event.target.files;
  if (!file) {
    selectedImageData = "";
    resetImagePreview();
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    selectedImageData = reader.result;
    imagePreview.innerHTML = `<img src="${selectedImageData}" alt="Complaint preview">`;
  };
  reader.readAsDataURL(file);
}

function handleFormSubmit(event) {
  event.preventDefault();

  const complaint = {
    id: generateId(),
    fullName: document.getElementById("fullName").value.trim(),
    phoneNumber: document.getElementById("phoneNumber").value.trim(),
    location: document.getElementById("location").value.trim(),
    liveLocation: selectedLiveLocation,
    category: document.getElementById("category").value,
    donationAmount: Number(document.getElementById("donationAmount").value || 0),
    donationMethod: document.getElementById("donationMethod").value.trim(),
    description: document.getElementById("description").value.trim(),
    image: selectedImageData,
    status: "Pending",
    createdAt: new Date().toLocaleString(),
  };

  const complaints = getComplaints();
  complaints.unshift(complaint);
  saveComplaints(complaints);

  complaintForm.reset();
  selectedImageData = "";
  selectedLiveLocation = null;
  resetImagePreview();
  resetLiveLocationStatus();
  renderAll();
  showNotification("Success", text("notificationSubmitted"), "success");
  switchTab("citizen");
}

function handleDonationRecordSubmit(event) {
  event.preventDefault();
  const donation = buildStandaloneDonation("Saved");
  if (!donation) return;

  const donations = getDonations();
  donations.unshift(donation);
  saveDonations(donations);
  donationForm.reset();
  resetDonationPaymentViews();
  renderAll();
  showNotification("Success", text("donationSaved"), "success");
}

function handleFundUsageSubmit(event) {
  event.preventDefault();
  const entry = {
    id: generateId(),
    category: document.getElementById("usageCategory").value.trim(),
    amount: Number(document.getElementById("usageAmount").value || 0),
    createdAt: new Date().toLocaleString(),
  };

  if (!entry.category || !entry.amount) return;

  const entries = getFundUsageEntries();
  entries.unshift(entry);
  saveFundUsageEntries(entries);
  fundUsageForm.reset();
  renderAll();
  showNotification("Success", text("fundUsageSaved"), "success");
}

function handleSocialLinksSubmit(event) {
  event.preventDefault();
  const links = {
    youtube: document.getElementById("youtubeLink").value.trim(),
    facebook: document.getElementById("facebookLink").value.trim(),
    instagram: document.getElementById("instagramLink").value.trim(),
    twitter: document.getElementById("twitterLink").value.trim(),
  };

  localStorage.setItem(SOCIAL_LINKS_STORAGE_KEY, JSON.stringify(links));
  renderAll();
  showNotification("Success", text("socialLinksSaved"), "success");
}

function handleAdminLogin(event) {
  event.preventDefault();
  const username = document.getElementById("adminUsername").value.trim();
  const password = document.getElementById("adminPassword").value.trim();
  const account = getAdminAccount();

  if ((username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) || (account && username === account.username && password === account.password)) {
    localStorage.setItem(ADMIN_SESSION_KEY, "authenticated");
    adminLoginForm.reset();
    updateAdminAccessView();
    showNotification("Success", text("notificationAdminGranted"), "success");
    return;
  }

  showNotification("Error", text("notificationAdminDenied"), "error");
}

function handleAdminSignup(event) {
  event.preventDefault();
  const username = document.getElementById("signupUsername").value.trim();
  const mobile = document.getElementById("signupMobile").value.trim();
  const password = document.getElementById("signupPassword").value.trim();
  const confirmPassword = document.getElementById("signupConfirmPassword").value.trim();
  const existing = getAdminAccount();

  if (password !== confirmPassword) {
    showNotification("Error", text("notificationPasswordMismatch"), "error");
    return;
  }

  if ((existing && existing.username === username) || username === ADMIN_CREDENTIALS.username) {
    showNotification("Error", text("notificationSignupExists"), "error");
    return;
  }

  saveAdminAccount({ username, mobile, password });
  adminSignupForm.reset();
  document.getElementById("adminUsername").value = username;
  switchAdminAuthView("login");
  showNotification("Success", text("notificationSignupSuccess"), "success");
}

function handleForgotPassword(event) {
  event.preventDefault();
  const username = document.getElementById("forgotUsername").value.trim();
  const mobile = document.getElementById("forgotMobile").value.trim();
  const newPassword = document.getElementById("forgotNewPassword").value.trim();
  const confirmPassword = document.getElementById("forgotConfirmPassword").value.trim();
  const account = getAdminAccount();

  if (newPassword !== confirmPassword) {
    showNotification("Error", text("notificationPasswordMismatch"), "error");
    return;
  }

  if (!account || account.username !== username || account.mobile !== mobile) {
    showNotification("Error", text("notificationForgotFailed"), "error");
    return;
  }

  saveAdminAccount({ ...account, password: newPassword });
  adminForgotForm.reset();
  switchAdminAuthView("login");
  showNotification("Success", text("notificationForgotSuccess"), "success");
}

function handleAdminLogout() {
  localStorage.removeItem(ADMIN_SESSION_KEY);
  switchAdminAuthView("login");
  updateAdminAccessView();
  showNotification("Info", text("notificationLoggedOut"), "info");
}

function getComplaints() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]").map((complaint) => ({
    ...complaint,
    category: CATEGORY_MAP[complaint.category] || complaint.category,
  }));
}

function saveComplaints(complaints) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(complaints));
}

function getDonations() {
  return JSON.parse(localStorage.getItem(DONATION_STORAGE_KEY) || "[]");
}

function saveDonations(donations) {
  localStorage.setItem(DONATION_STORAGE_KEY, JSON.stringify(donations));
}

function getFundUsageEntries() {
  return JSON.parse(localStorage.getItem(FUND_USAGE_STORAGE_KEY) || "[]");
}

function saveFundUsageEntries(entries) {
  localStorage.setItem(FUND_USAGE_STORAGE_KEY, JSON.stringify(entries));
}

function getAdminAccount() {
  return JSON.parse(localStorage.getItem(ADMIN_ACCOUNT_STORAGE_KEY) || "null");
}

function saveAdminAccount(account) {
  localStorage.setItem(ADMIN_ACCOUNT_STORAGE_KEY, JSON.stringify(account));
}

function getSocialLinks() {
  return JSON.parse(localStorage.getItem(SOCIAL_LINKS_STORAGE_KEY) || "{}");
}

function renderAll() {
  const complaints = getComplaints();
  const donations = getDonations();
  const fundUsageEntries = getFundUsageEntries();
  const socialLinks = getSocialLinks();
  renderTable(complaints);
  renderDonationHistory(donations);
  renderFundUsage(fundUsageEntries);
  renderSocialLinks(socialLinks);
  populateSocialLinksForm(socialLinks);
  renderStats(complaints, donations, fundUsageEntries);
  renderChart(complaints);
  renderDonationChart(donations, complaints);
}

function renderSocialLinks(links) {
  const items = [
    { key: "youtube", label: "YouTube", icon: "fa-brands fa-youtube", className: "youtube" },
    { key: "facebook", label: "Facebook", icon: "fa-brands fa-facebook-f", className: "facebook" },
    { key: "instagram", label: "Instagram", icon: "fa-brands fa-instagram", className: "instagram" },
    { key: "twitter", label: "Twitter / X", icon: "fa-brands fa-x-twitter", className: "twitter" },
  ].filter((item) => links[item.key]);

  if (!items.length) {
    socialLinksList.innerHTML = `
      <div class="empty-state">
        <i class="fa-solid fa-hashtag"></i>
        <strong>${text("socialEmpty")}</strong>
        <p>${text("socialEmptyDesc")}</p>
      </div>
    `;
    return;
  }

  socialLinksList.innerHTML = items
    .map(
      (item) => `
        <a class="social-link-card ${item.className}" href="${links[item.key]}" target="_blank" rel="noopener noreferrer">
          <i class="${item.icon}"></i>
          <div>
            <strong>${item.label}</strong>
            <span>${links[item.key]}</span>
          </div>
        </a>
      `
    )
    .join("");
}

function populateSocialLinksForm(links) {
  document.getElementById("youtubeLink").value = links.youtube || "";
  document.getElementById("facebookLink").value = links.facebook || "";
  document.getElementById("instagramLink").value = links.instagram || "";
  document.getElementById("twitterLink").value = links.twitter || "";
}

function renderTable(complaints) {
  if (!complaints.length) {
    complaintsTableBody.innerHTML = `
      <tr>
        <td colspan="10">
          <div class="empty-state">
            <i class="fa-solid fa-database"></i>
            <strong>${text("noRecords")}</strong>
            <p>${text("noRecordsDesc")}</p>
          </div>
        </td>
      </tr>
    `;
    return;
  }

  complaintsTableBody.innerHTML = complaints
    .map(
      (complaint) => `
        <tr>
          <td>${complaint.id}</td>
          <td>${complaint.fullName}</td>
          <td>${complaint.phoneNumber}</td>
          <td>${complaint.location}</td>
          <td>${renderLiveLocationCell(complaint.liveLocation)}</td>
          <td>${getCategoryLabel(complaint.category)}</td>
          <td>${renderDonationCell(complaint)}</td>
          <td>${createStatusBadge(complaint.status)}</td>
          <td>
            ${
              complaint.image
                ? `<img class="mini-thumb" src="${complaint.image}" alt="Evidence for ${complaint.id}">`
                : `<span class="status-badge status-pending">${text("noImage")}</span>`
            }
          </td>
          <td>
            <select class="status-select" data-id="${complaint.id}">
              ${["Pending", "Confirmed", "Completed"]
                .map(
                  (status) =>
                    `<option value="${status}" ${complaint.status === status ? "selected" : ""}>${getStatusLabel(status)}</option>`
                )
                .join("")}
            </select>
          </td>
        </tr>
      `
    )
    .join("");
}

function renderDonationHistory(donations) {
  if (!donations.length) {
    donationHistoryList.innerHTML = `
      <div class="empty-state">
        <i class="fa-solid fa-hand-holding-dollar"></i>
        <strong>${text("donationHistoryEmpty")}</strong>
        <p>${text("donationHistoryEmptyDesc")}</p>
      </div>
    `;
    return;
  }

  donationHistoryList.innerHTML = donations
    .map(
      (donation) => `
        <article class="donation-history-item">
          <strong>${donation.donorName}</strong>
          <div class="donation-meta">
            <span><i class="fa-solid fa-indian-rupee-sign"></i> ${donation.amount}</span>
            <span><i class="fa-solid fa-wallet"></i> ${donation.method}</span>
            <span><i class="fa-regular fa-calendar"></i> ${donation.createdAt}</span>
          </div>
          ${donation.purpose ? `<p>${donation.purpose}</p>` : ""}
        </article>
      `
    )
    .join("");
}

function renderFundUsage(entries) {
  if (!entries.length) {
    fundUsageList.innerHTML = `
      <div class="empty-state">
        <i class="fa-solid fa-wallet"></i>
        <strong>${text("fundUsageEmpty")}</strong>
        <p>${text("fundUsageEmptyDesc")}</p>
      </div>
    `;
    return;
  }

  fundUsageList.innerHTML = entries
    .map(
      (entry) => `
        <article class="fund-usage-item">
          <strong>${entry.category}</strong>
          <div class="usage-meta">
            <span><i class="fa-solid fa-indian-rupee-sign"></i> ${entry.amount}</span>
            <span><i class="fa-regular fa-calendar"></i> ${entry.createdAt}</span>
          </div>
        </article>
      `
    )
    .join("");
}

function renderStats(complaints, donations, fundUsageEntries) {
  const total = complaints.length;
  const pending = complaints.filter((item) => item.status === "Pending").length;
  const confirmed = complaints.filter((item) => item.status === "Confirmed").length;
  const completed = complaints.filter((item) => item.status === "Completed").length;
  const complaintDonations = complaints.reduce((sum, item) => sum + Number(item.donationAmount || 0), 0);
  const standaloneDonations = donations.reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const totalDonations = complaintDonations + standaloneDonations;
  const fundUsed = fundUsageEntries.reduce((sum, item) => sum + Number(item.amount || 0), 0);

  statsElements.total.textContent = total;
  statsElements.pending.textContent = pending;
  statsElements.confirmed.textContent = confirmed;
  statsElements.completed.textContent = completed;
  statsElements.donations.textContent = `INR ${totalDonations}`;
  statsElements.fundUsed.textContent = `INR ${fundUsed}`;
  statsElements.heroTotal.textContent = total;
  statsElements.heroPending.textContent = pending;
  statsElements.heroCompleted.textContent = completed;
}

function renderChart(complaints) {
  const counts = {
    [text("pending")]: complaints.filter((item) => item.status === "Pending").length,
    [text("confirmed")]: complaints.filter((item) => item.status === "Confirmed").length,
    [text("completed")]: complaints.filter((item) => item.status === "Completed").length,
  };

  const chartData = {
    labels: Object.keys(counts),
    datasets: [
      {
        data: Object.values(counts),
        backgroundColor: ["#f2b43f", "#2f83d4", "#26a269"],
        hoverOffset: 10,
        borderWidth: 0,
      },
    ],
  };

  if (complaintChart) {
    complaintChart.data = chartData;
    complaintChart.update();
    return;
  }

  complaintChart = new Chart(document.getElementById("complaintChart"), {
    type: "doughnut",
    data: chartData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "68%",
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            usePointStyle: true,
            padding: 22,
            font: { family: "Manrope", weight: "700" },
          },
        },
      },
    },
  });
}

function renderDonationChart(donations, complaints) {
  const methodCounts = {
    UPI: 0,
    "QR Code": 0,
    Razorpay: 0,
    Card: 0,
    "Net Banking": 0,
    "Cash Pledge": 0,
  };

  donations.forEach((item) => {
    methodCounts[item.method] = (methodCounts[item.method] || 0) + Number(item.amount || 0);
  });

  complaints.forEach((item) => {
    if (item.donationAmount) {
      const method = item.donationMethod || "Cash Pledge";
      methodCounts[method] = (methodCounts[method] || 0) + Number(item.donationAmount || 0);
    }
  });

  const entries = Object.entries(methodCounts).filter(([, amount]) => amount > 0);
  const labels = entries.length ? entries.map(([label]) => label) : [text("paymentMethodNoData")];
  const data = entries.length ? entries.map(([, amount]) => amount) : [1];

  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: ["#114a8c", "#ea7b22", "#26a269", "#7b5cff", "#f2b43f", "#4fb6c8"],
        borderWidth: 0,
      },
    ],
  };

  if (donationChart) {
    donationChart.data = chartData;
    donationChart.update();
    return;
  }

  donationChart = new Chart(document.getElementById("donationChart"), {
    type: "bar",
    data: chartData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
    },
  });
}

function updateComplaintStatus(complaintId, newStatus) {
  if (!isAdminAuthenticated()) {
    updateAdminAccessView();
    showNotification("Error", text("notificationLoginRequired"), "error");
    return;
  }

  const complaints = getComplaints().map((complaint) =>
    complaint.id === complaintId ? { ...complaint, status: newStatus } : complaint
  );

  saveComplaints(complaints);
  renderAll();
  showNotification("Info", text("notificationStatusUpdated"), "info");
}

function switchTab(targetTab) {
  if (targetTab === "admin") updateAdminAccessView();

  tabButtons.forEach((button) => {
    const isActive = button.dataset.tab === targetTab;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  tabPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.id === targetTab);
  });
}

function createStatusBadge(status) {
  return `<span class="status-badge status-${status.toLowerCase()}">${getStatusLabel(status)}</span>`;
}

function getStatusLabel(status) {
  return text(status.toLowerCase());
}

function getCategoryLabel(category) {
  return text(`category_${category}`);
}

function isAdminAuthenticated() {
  return localStorage.getItem(ADMIN_SESSION_KEY) === "authenticated";
}

function updateAdminAccessView() {
  const isAuthenticated = isAdminAuthenticated();
  adminLoginView.classList.toggle("admin-hidden", isAuthenticated);
  adminDashboardView.classList.toggle("admin-hidden", !isAuthenticated);
  if (!isAuthenticated) {
    switchAdminAuthView("login");
  }
}

function switchAdminAuthView(view) {
  authTabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.authView === view);
  });
  adminLoginForm.classList.toggle("admin-hidden", view !== "login");
  adminSignupForm.classList.toggle("admin-hidden", view !== "signup");
  adminForgotForm.classList.toggle("admin-hidden", view !== "forgot");
}

function showNotification(title, message, type = "success") {
  const iconMap = {
    success: "fa-circle-check",
    info: "fa-circle-info",
    error: "fa-circle-xmark",
  };

  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.innerHTML = `
    <i class="fa-solid ${iconMap[type] || iconMap.info}"></i>
    <div>
      <strong>${title}</strong>
      <span>${message}</span>
    </div>
  `;
  notificationContainer.appendChild(notification);

  setTimeout(() => {
    notification.style.opacity = "0";
    notification.style.transform = "translateX(30px)";
    notification.style.transition = "all 0.3s ease";
  }, 3200);

  setTimeout(() => notification.remove(), 3600);
}

function resetImagePreview() {
  imagePreview.innerHTML = `
    <div>
      <i class="fa-regular fa-image"></i>
      <span>${text("noImageSelected")}</span>
    </div>
  `;
}

function captureLiveLocation() {
  if (!navigator.geolocation) {
    liveLocationStatus.textContent = text("liveLocationUnavailable");
    showNotification("Error", text("liveLocationUnavailable"), "error");
    return;
  }

  liveLocationStatus.textContent = text("liveLocationFetching");

  navigator.geolocation.getCurrentPosition(
    (position) => {
      selectedLiveLocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        accuracy: Math.round(position.coords.accuracy),
      };
      liveLocationStatus.textContent = `${text("liveLocationAdded")} (${selectedLiveLocation.latitude.toFixed(5)}, ${selectedLiveLocation.longitude.toFixed(5)})`;
      showNotification("Success", text("liveLocationAdded"), "success");
    },
    (error) => {
      selectedLiveLocation = null;
      liveLocationStatus.textContent = error.code === 1 ? text("liveLocationDenied") : text("liveLocationUnavailable");
      showNotification("Error", error.code === 1 ? text("liveLocationDenied") : text("liveLocationUnavailable"), "error");
    },
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
  );
}

function resetLiveLocationStatus() {
  liveLocationStatus.textContent = text("liveLocationEmpty");
}

function renderLiveLocationCell(liveLocation) {
  if (!liveLocation || typeof liveLocation.latitude !== "number" || typeof liveLocation.longitude !== "number") {
    return `<span class="status-badge status-pending">${text("noLiveLocation")}</span>`;
  }

  const mapUrl = `https://www.google.com/maps?q=${liveLocation.latitude},${liveLocation.longitude}`;
  return `<a class="map-link" href="${mapUrl}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-location-dot"></i> ${liveLocation.latitude.toFixed(4)}, ${liveLocation.longitude.toFixed(4)}</a>`;
}

function renderDonationCell(complaint) {
  const amount = Number(complaint.donationAmount || 0);
  if (!amount) return `<span class="status-badge status-pending">${text("noDonation")}</span>`;

  const method = complaint.donationMethod ? ` - ${complaint.donationMethod}` : "";
  return `<span class="donation-pill"><i class="fa-solid fa-indian-rupee-sign"></i> ${amount}${method}</span>`;
}

function buildStandaloneDonation(status) {
  const donorName = document.getElementById("donorName").value.trim();
  const donorPhone = document.getElementById("donorPhone").value.trim();
  const amount = Number(document.getElementById("standaloneDonationAmount").value || 0);
  const method = document.getElementById("standaloneDonationMethod").value;
  const purpose = document.getElementById("donationPurpose").value.trim();

  if (!donorName || !donorPhone || !amount || !method) return null;

  return {
    id: generateId(),
    donorName,
    donorPhone,
    amount,
    method,
    purpose,
    status,
    createdAt: new Date().toLocaleString(),
  };
}

function generateUpiLink() {
  const donation = buildStandaloneDonation("UPI Pending");
  if (!donation) return;

  const url = `upi://pay?pa=${encodeURIComponent(MUNICIPAL_UPI_ID)}&pn=${encodeURIComponent("Municipal Cleanliness Fund")}&am=${encodeURIComponent(donation.amount)}&cu=INR&tn=${encodeURIComponent(donation.purpose || "Garbage management support")}`;
  upiLinkDisplay.href = url;
  upiLinkDisplay.textContent = url;
  upiLinkDisplay.classList.remove("disabled-link");
  upiLinkDisplay.dataset.generated = "true";
  showNotification("Success", text("donationUpiGenerated"), "success");
}

function generateQrCode() {
  const donation = buildStandaloneDonation("QR Pending");
  if (!donation) return;

  const upiUrl = `upi://pay?pa=${encodeURIComponent(MUNICIPAL_UPI_ID)}&pn=${encodeURIComponent("Municipal Cleanliness Fund")}&am=${encodeURIComponent(donation.amount)}&cu=INR&tn=${encodeURIComponent(donation.purpose || "Garbage management support")}`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(upiUrl)}`;
  qrCodeContainer.innerHTML = `<img src="${qrUrl}" alt="Donation QR Code">`;
  qrCodeContainer.dataset.generated = "true";
  showNotification("Success", text("donationQrGenerated"), "success");
}

function launchRazorpayPayment() {
  const donation = buildStandaloneDonation("Paid");
  if (!donation) return;

  if (!window.Razorpay || RAZORPAY_KEY.includes("replace_with_your_key")) {
    showNotification("Info", text("donationRazorpayMissing"), "info");
    return;
  }

  const options = {
    key: RAZORPAY_KEY,
    amount: donation.amount * 100,
    currency: "INR",
    name: "Municipal Cleanliness Fund",
    description: donation.purpose || "Citizen support donation",
    handler: function () {
      const donations = getDonations();
      donations.unshift(donation);
      saveDonations(donations);
      donationForm.reset();
      resetDonationPaymentViews();
      renderAll();
      showNotification("Success", text("donationPaySuccess"), "success");
    },
    prefill: {
      name: donation.donorName,
      contact: donation.donorPhone,
    },
    theme: { color: "#114a8c" },
  };

  const rzp = new Razorpay(options);
  rzp.open();
}

function resetDonationPaymentViews() {
  upiLinkDisplay.href = "#";
  upiLinkDisplay.textContent = text("upiLinkPlaceholder");
  upiLinkDisplay.classList.add("disabled-link");
  upiLinkDisplay.dataset.generated = "false";
  qrCodeContainer.innerHTML = `<i class="fa-solid fa-qrcode"></i><span>${text("qrPlaceholder")}</span>`;
  qrCodeContainer.dataset.generated = "false";
}

function text(key) {
  return translations[currentLocale][key] || translations.en[key] || key;
}

function generateId() {
  return `CMP-${Math.random().toString(36).slice(2, 6).toUpperCase()}${Date.now().toString().slice(-4)}`;
}
