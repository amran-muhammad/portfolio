'use strict';

(function() {
    var root = document.documentElement;
    var translations = {
        'Portfolio': 'পোর্টফোলিও',
        'Hello': 'পরিচিতি',
        'Resume': 'জীবনবৃত্তান্ত',
        'Contact': 'যোগাযোগ',
        'Software QA Engineer': 'সফটওয়্যার কিউএ ইঞ্জিনিয়ার',
        'Automation': 'অটোমেশন',
        'Full-stack': 'ফুল-স্ট্যাক',
        'Available for high-impact projects': 'গুরুত্বপূর্ণ প্রকল্পের জন্য উপলব্ধ',
        'Phone:': 'ফোন:',
        'Email:': 'ইমেইল:',
        'Address:': 'ঠিকানা:',
        '410/1 Jahanara Monjil, Bagbari, Sylhet 3100, Bangladesh': '৪১০/১ জাহানারা মঞ্জিল, বাগবাড়ি, সিলেট ৩১০০, বাংলাদেশ',
        'Download CV': 'সিভি ডাউনলোড',
        'View Projects': 'প্রকল্প দেখুন',
        'Let’s Talk': 'কথা বলি',
        'Hi_': 'পরিচিতি_',
        'I am a Senior Software QA Engineer at Appifylab, leveraging my background as a Full-Stack Web Developer to bring a unique, comprehensive perspective to quality assurance.': 'আমি AppifyLab-এ সিনিয়র সফটওয়্যার কিউএ ইঞ্জিনিয়ার। ফুল-স্ট্যাক ওয়েব ডেভেলপার হিসেবে আমার অভিজ্ঞতা মান নিশ্চিতকরণে একটি স্বতন্ত্র ও সামগ্রিক দৃষ্টিভঙ্গি এনে দেয়।',
        'I specialize in designing, architecting, and implementing robust automated testing solutions for high-traffic SaaS products like EzyCourse. Utilizing Playwright, I create intuitive, responsive, and reliable automated tests for E2E, cross-browser, and API functionality, integrating them into our CI/CD pipeline.': 'EzyCourse-এর মতো উচ্চ ট্রাফিক SaaS পণ্যের জন্য শক্তিশালী স্বয়ংক্রিয় টেস্টিং সমাধান ডিজাইন, আর্কিটেকচার ও বাস্তবায়নে আমি বিশেষজ্ঞ। Playwright ব্যবহার করে E2E, ক্রস-ব্রাউজার ও API-এর নির্ভরযোগ্য স্বয়ংক্রিয় পরীক্ষা তৈরি করি এবং সেগুলো CI/CD পাইপলাইনে যুক্ত করি।',
        'My development experience allows me to proactively identify architectural risks and potential defects early in the SDLC, write exceptionally clean and testable automation code, and collaborate deeply with engineering teams. I champion modern development and testing practices, continuously mentor junior team members, and am dedicated to ensuring the deployment of scalable, high-quality, and reliable web solutions from concept to production.': 'আমার ডেভেলপমেন্ট অভিজ্ঞতা SDLC-এর শুরুতেই আর্কিটেকচারগত ঝুঁকি ও সম্ভাব্য ত্রুটি শনাক্ত করতে, পরিচ্ছন্ন ও পরীক্ষাযোগ্য অটোমেশন কোড লিখতে এবং ইঞ্জিনিয়ারিং দলের সঙ্গে গভীরভাবে কাজ করতে সাহায্য করে। আধুনিক ডেভেলপমেন্ট ও টেস্টিং চর্চা, জুনিয়রদের মেন্টরিং এবং ধারণা থেকে প্রোডাকশন পর্যন্ত মানসম্মত ও নির্ভরযোগ্য সমাধান নিশ্চিত করাই আমার লক্ষ্য।',
        'Core strengths_': 'মূল দক্ষতা_',
        'Quality-first engineering': 'কোয়ালিটি-ফার্স্ট ইঞ্জিনিয়ারিং',
        'Designing resilient QA systems that catch issues before they reach production and reduce release risk.': 'এমন নির্ভরযোগ্য কিউএ ব্যবস্থা তৈরি করি যা প্রোডাকশনের আগেই সমস্যা শনাক্ত করে এবং রিলিজ ঝুঁকি কমায়।',
        'Automation architecture': 'অটোমেশন আর্কিটেকচার',
        'Building scalable Playwright-based test ecosystems for E2E, API, and cross-browser validation.': 'E2E, API এবং ক্রস-ব্রাউজার যাচাইয়ের জন্য স্কেলযোগ্য Playwright-ভিত্তিক টেস্ট ব্যবস্থা তৈরি করি।',
        'Full-stack awareness': 'ফুল-স্ট্যাক ধারণা',
        'Bridging frontend, backend, and deployment realities to create smarter, more testable web applications.': 'আরও কার্যকর ও পরীক্ষাযোগ্য ওয়েব অ্যাপ তৈরিতে ফ্রন্টএন্ড, ব্যাকএন্ড ও ডেপ্লয়মেন্টের বাস্তবতা একত্র করি।',
        'Team enablement': 'দলের সক্ষমতা বৃদ্ধি',
        'Mentoring junior engineers and fostering a quality mindset across product, QA, and engineering teams.': 'জুনিয়র ইঞ্জিনিয়ারদের মেন্টর করি এবং প্রোডাক্ট, কিউএ ও ইঞ্জিনিয়ারিং দলে মানসম্মত কাজের সংস্কৃতি গড়ে তুলি।',
        'Resume_': 'জীবনবৃত্তান্ত_',
        'Experienced in all phases of the Software Development and Quality Assurance Lifecycle (SDLC/SQALC), including planning, automated testing, debugging, and continuous integration. I specialize in designing and implementing innovative, tailored quality solutions—from comprehensive test strategies to reliable automation frameworks using Playwright—that help businesses across various industries achieve their objectives for product reliability and performance.': 'পরিকল্পনা, স্বয়ংক্রিয় পরীক্ষা, ডিবাগিং ও কন্টিনিউয়াস ইন্টিগ্রেশনসহ সফটওয়্যার ডেভেলপমেন্ট এবং কোয়ালিটি অ্যাস্যুরেন্স লাইফসাইকেলের সব ধাপে আমার অভিজ্ঞতা রয়েছে। Playwright-ভিত্তিক নির্ভরযোগ্য অটোমেশন ফ্রেমওয়ার্ক থেকে পূর্ণাঙ্গ টেস্ট কৌশল পর্যন্ত ব্যবসার প্রয়োজন অনুযায়ী মানসম্মত সমাধান তৈরি করি।',
        'My proficiency extends to advanced programming tools and frameworks, backed by a strong foundation in mathematics, algorithms, and data-processing logic. This deep technical understanding enables me to not only execute complex testing but also to proactively analyze codebase structure and build resilient, scalable automation code.': 'উন্নত প্রোগ্রামিং টুল ও ফ্রেমওয়ার্কের পাশাপাশি গণিত, অ্যালগরিদম এবং ডেটা প্রসেসিং লজিকে আমার শক্ত ভিত্তি রয়েছে। এই কারিগরি জ্ঞান জটিল পরীক্ষা পরিচালনা, কোডবেস বিশ্লেষণ এবং স্থিতিশীল ও স্কেলযোগ্য অটোমেশন কোড তৈরিতে সহায়তা করে।',
        'education': 'শিক্ষা',
        'Jan 2015 - Dec 2018': 'জানুয়ারি ২০১৫ - ডিসেম্বর ২০১৮',
        'July 2012 - June 2014': 'জুলাই ২০১২ - জুন ২০১৪',
        'Jan 2007 - Jan 2011': 'জানুয়ারি ২০০৭ - জানুয়ারি ২০১১',
        'Bachelor Computer Science & Engineering': 'কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিংয়ে স্নাতক',
        'employment': 'কর্মজীবন',
        'November 2025 - Running': 'নভেম্বর ২০২৫ - বর্তমান',
        'Senior Software QA Engineer': 'সিনিয়র সফটওয়্যার কিউএ ইঞ্জিনিয়ার',
        'I serve as a Senior Software QA Engineer at Appifylab, where I am instrumental in guaranteeing the quality, performance, and reliability of our flagship no-code LMS platform, EzyCourse, and other key SaaS products.': 'AppifyLab-এ সিনিয়র সফটওয়্যার কিউএ ইঞ্জিনিয়ার হিসেবে আমি আমাদের প্রধান নো-কোড LMS প্ল্যাটফর্ম EzyCourse এবং অন্যান্য SaaS পণ্যের মান, কার্যক্ষমতা ও নির্ভরযোগ্যতা নিশ্চিত করি।',
        'My primary focus is on designing, implementing, and maintaining robust automated testing solutions using Playwright. I leverage this modern framework to conduct extensive end-to-end, cross-browser, and API testing, integrating these reliable checks directly into our CI/CD pipelines to ensure swift and confident deployments.': 'Playwright ব্যবহার করে শক্তিশালী স্বয়ংক্রিয় টেস্টিং সমাধান ডিজাইন, বাস্তবায়ন ও রক্ষণাবেক্ষণ আমার প্রধান কাজ। দ্রুত ও আত্মবিশ্বাসী ডেপ্লয়মেন্ট নিশ্চিত করতে E2E, ক্রস-ব্রাউজার ও API পরীক্ষা সরাসরি CI/CD পাইপলাইনে যুক্ত করি।',
        'I am responsible for defining overarching QA strategies, creating detailed test plans, and leading both complex manual and automated testing efforts. Furthermore, I mentor and coach junior QA engineers on automation best practices and collaborate closely with product and development teams to cultivate a comprehensive Quality-First mindset across the organization. Ultimately, my goal is to ensure a flawless and seamless user experience for our global clientele.': 'আমি সামগ্রিক কিউএ কৌশল নির্ধারণ, বিস্তারিত টেস্ট পরিকল্পনা তৈরি এবং জটিল ম্যানুয়াল ও স্বয়ংক্রিয় পরীক্ষার নেতৃত্ব দিই। পাশাপাশি জুনিয়র কিউএ ইঞ্জিনিয়ারদের অটোমেশনের সেরা চর্চায় প্রশিক্ষণ দিই এবং প্রতিষ্ঠানে কোয়ালিটি-ফার্স্ট মানসিকতা গড়ে তুলতে প্রোডাক্ট ও ডেভেলপমেন্ট দলের সঙ্গে কাজ করি।',
        'August 2023 - November 2025': 'আগস্ট ২০২৩ - নভেম্বর ২০২৫',
        'Senior Software Developer': 'সিনিয়র সফটওয়্যার ডেভেলপার',
        "I've delivered tailored tech solutions aligning with client goals, including REST APIs and Web apps. My role spanned analysis, design, development, and deployment, with a focus on leading the flagship website creation. Committed to building a strong, innovative core, I seamlessly integrate advancements while upholding industry best practices.": 'ক্লায়েন্টের লক্ষ্য অনুযায়ী REST API ও ওয়েব অ্যাপসহ কাস্টম প্রযুক্তি সমাধান দিয়েছি। বিশ্লেষণ, ডিজাইন, ডেভেলপমেন্ট ও ডেপ্লয়মেন্টের পাশাপাশি প্রধান ওয়েবসাইট তৈরিতে নেতৃত্ব দিয়েছি এবং ইন্ডাস্ট্রির সেরা চর্চা বজায় রেখেছি।',
        'May 2023 - July 2023': 'মে ২০২৩ - জুলাই ২০২৩',
        'Senior Software Engineer': 'সিনিয়র সফটওয়্যার ইঞ্জিনিয়ার',
        'I focused on Adonis, Laravel, Vue, React, and DevOps, crafting, sustaining, and managing applications. I offered tech guidance and mentorship to juniors, impacting architecture, design choices, and deployment procedures.': 'Adonis, Laravel, Vue, React ও DevOps ব্যবহার করে অ্যাপ্লিকেশন তৈরি, রক্ষণাবেক্ষণ ও পরিচালনা করেছি। জুনিয়রদের কারিগরি দিকনির্দেশনা ও মেন্টরিং দিয়েছি এবং আর্কিটেকচার, ডিজাইন ও ডেপ্লয়মেন্ট সিদ্ধান্তে অবদান রেখেছি।',
        'May 2022 - October 2023': 'মে ২০২২ - অক্টোবর ২০২৩',
        'Mentor, IT Team': 'মেন্টর, আইটি টিম',
        'I led and evaluated software from Lehoa IT, supervising Vue, Nuxt, and Express.js web app development. Upholding top-tier quality, performance, and user experience remained my priority throughout.': 'Lehoa IT-এর সফটওয়্যার কার্যক্রমে নেতৃত্ব ও মূল্যায়ন করেছি এবং Vue, Nuxt ও Express.js ওয়েব অ্যাপ ডেভেলপমেন্ট তত্ত্বাবধান করেছি। মান, কার্যক্ষমতা ও ব্যবহারকারীর অভিজ্ঞতা ছিল সর্বোচ্চ অগ্রাধিকার।',
        'August 2021 - February 2023': 'আগস্ট ২০২১ - ফেব্রুয়ারি ২০২৩',
        'System Developer': 'সিস্টেম ডেভেলপার',
        'I developed websites with Laravel, Vue, and utilized ERPNEXT for HRMS. Proficient in Python, JavaScript, jQuery, HTML, CSS, and SCSS, I created SASS-based apps and coded customer front-end applications. Additionally, I oversaw hosting, server setups for domains, and configured cloud platforms, including AWS services like LightSail, EC2, S3, SES, and Route 53.': 'Laravel ও Vue দিয়ে ওয়েবসাইট তৈরি এবং HRMS-এর জন্য ERPNEXT ব্যবহার করেছি। Python, JavaScript, jQuery, HTML, CSS ও SCSS দিয়ে SaaS অ্যাপ ও গ্রাহকমুখী ফ্রন্টএন্ড তৈরি করেছি। হোস্টিং, ডোমেইন সার্ভার এবং LightSail, EC2, S3, SES ও Route 53-সহ AWS সেবা কনফিগার করেছি।',
        'Sept 2020 - July 2021': 'সেপ্টেম্বর ২০২০ - জুলাই ২০২১',
        'Software Developer': 'সফটওয়্যার ডেভেলপার',
        'I built strong web apps with Angular, Node.js, and Express.js, integrating secure payment methods for smooth transactions and ensuring efficient, user-friendly solutions.': 'Angular, Node.js ও Express.js দিয়ে শক্তিশালী ওয়েব অ্যাপ তৈরি করেছি এবং নির্বিঘ্ন লেনদেনের জন্য নিরাপদ পেমেন্ট ব্যবস্থা যুক্ত করেছি।',
        'Sept 2019 - September 2020': 'সেপ্টেম্বর ২০১৯ - সেপ্টেম্বর ২০২০',
        'Software Engineer': 'সফটওয়্যার ইঞ্জিনিয়ার',
        'I engaged in both front-end and back-end development, demonstrating proficiency across programming languages, frameworks, and databases. I ensured the smooth integration of components, resulting in dynamic web solutions.': 'ফ্রন্টএন্ড ও ব্যাকএন্ড উভয় ডেভেলপমেন্টে কাজ করেছি এবং বিভিন্ন প্রোগ্রামিং ভাষা, ফ্রেমওয়ার্ক ও ডেটাবেজ ব্যবহার করেছি। কম্পোনেন্টগুলোর নির্বিঘ্ন সমন্বয়ের মাধ্যমে গতিশীল ওয়েব সমাধান তৈরি করেছি।',
        'Professional skills': 'পেশাগত দক্ষতা',
        'Product marketplace · 10 live builds': 'প্রোডাক্ট মার্কেটপ্লেস · ১০টি লাইভ প্রজেক্ট',
        'Choose what your business needs_': 'আপনার ব্যবসার প্রয়োজনীয় সমাধান বেছে নিন_',
        'Explore production-ready ideas across SaaS, commerce, and business tools. Every project is available to try, and every solution can be adapted to your workflow.': 'SaaS, কমার্স ও ব্যবসায়িক টুলের প্রোডাকশন-রেডি ধারণা দেখুন। প্রতিটি প্রকল্প ব্যবহার করে দেখা যায় এবং আপনার কাজের ধরন অনুযায়ী মানিয়ে নেওয়া যায়।',
        'Have a project in mind?': 'নতুন প্রকল্পের পরিকল্পনা আছে?',
        'Request a custom build': 'কাস্টম প্রজেক্টের অনুরোধ করুন',
        'All': 'সব',
        'Tools': 'টুলস',
        'Experiences': 'এক্সপেরিয়েন্স',
        'Commerce': 'কমার্স',
        'projects available': 'টি প্রকল্প উপলব্ধ',
        'Available for new work': 'নতুন কাজের জন্য উপলব্ধ',
        'Search channels...': 'চ্যানেল খুঁজুন...',
        'Bangladesh': 'বাংলাদেশ',
        'Sports': 'খেলাধুলা',
        'Global Live TV': 'বিশ্বব্যাপী লাইভ টিভি',
        'Browse and watch live television channels from different countries with fast search, country and category filters, and an immersive full-screen player.': 'দ্রুত সার্চ, দেশ ও ক্যাটাগরি ফিল্টার এবং পূর্ণস্ক্রিন প্লেয়ারে বিভিন্ন দেশের লাইভ টেলিভিশন চ্যানেল দেখুন।',
        'Product features:': 'প্রোডাক্ট ফিচার:',
        'Live Streaming': 'লাইভ স্ট্রিমিং',
        'Global Channels': 'বিশ্বব্যাপী চ্যানেল',
        'Responsive UI': 'রেসপনসিভ ইউআই',
        'LIVE': 'লাইভ',
        'HOME   HORROR   SCI-FI   COMEDY': 'হোম   হরর   সাই-ফাই   কমেডি',
        'PUBLIC DOMAIN — FREE FOREVER': 'পাবলিক ডোমেইন — সবসময় বিনামূল্যে',
        '1927   ·   Public Domain': '১৯২৭   ·   পাবলিক ডোমেইন',
        'Streaming Experience': 'স্ট্রিমিং এক্সপেরিয়েন্স',
        'A Netflix-inspired public-domain movie library with genre browsing, featured titles, search, and a personal watchlist.': 'Netflix-অনুপ্রাণিত পাবলিক-ডোমেইন মুভি লাইব্রেরি, যেখানে জঁরা ব্রাউজিং, ফিচার্ড মুভি, সার্চ ও ব্যক্তিগত ওয়াচলিস্ট রয়েছে।',
        'Movie Discovery': 'মুভি ডিসকভারি',
        'Realtime Video Room': 'রিয়েলটাইম ভিডিও রুম',
        '● room open': '● রুম চালু',
        'Open the room.': 'রুম চালু করুন।',
        'Choose who enters.': 'কে প্রবেশ করবে বেছে নিন।',
        'A focused Google Meet and Zoom-inspired room experience with host-controlled access, quick invitations, and a calm pre-join flow.': 'Google Meet ও Zoom-অনুপ্রাণিত ভিডিও রুম, যেখানে হোস্ট-নিয়ন্ত্রিত প্রবেশ, দ্রুত আমন্ত্রণ এবং সহজ প্রি-জয়েন অভিজ্ঞতা রয়েছে।',
        'EdTech Platform': 'এডটেক প্ল্যাটফর্ম',
        'About Aspire': 'Aspire সম্পর্কে',
        'Sign In': 'সাইন ইন',
        'A-Level & GCSE Question Banks': 'A-Level ও GCSE প্রশ্নব্যাংক',
        'Master Every Subject.': 'প্রতিটি বিষয় আয়ত্ত করুন।',
        'Ace Every Exam.': 'প্রতিটি পরীক্ষায় সেরা হোন।',
        'Aspire Learning helps students prepare with exam-board aligned question banks, instant marking, and progress tracking.': 'Aspire Learning পরীক্ষার বোর্ড অনুযায়ী প্রশ্নব্যাংক, তাৎক্ষণিক মূল্যায়ন ও অগ্রগতি ট্র্যাকিংয়ের মাধ্যমে শিক্ষার্থীদের প্রস্তুতিতে সাহায্য করে।',
        'Education': 'শিক্ষা',
        'Question Bank': 'প্রশ্নব্যাংক',
        'Progress Tracking': 'অগ্রগতি ট্র্যাকিং',
        'Featured SaaS': 'ফিচার্ড SaaS',
        'Ezycourse - One platform to build and sell anything': 'EzyCourse - তৈরি ও বিক্রির পূর্ণাঙ্গ প্ল্যাটফর্ম',
        'During my tenure at Appifylab, I played a pivotal role by making substantial contributions to a wide array of modules within Ezycourse. These contributions underscored my adeptness in handling both front-end and back-end development aspects of the platform, showcasing my comprehensive expertise.Build your courses and bundle courses smoothly and easily using our built-in course builder.': 'AppifyLab-এ কাজের সময় EzyCourse-এর বিভিন্ন মডিউলে গুরুত্বপূর্ণ অবদান রেখেছি। প্ল্যাটফর্মটির ফ্রন্টএন্ড ও ব্যাকএন্ড উভয় দিকেই কাজ করেছি এবং বিল্ট-ইন কোর্স বিল্ডারের মাধ্যমে সহজে কোর্স ও কোর্স বান্ডল তৈরির অভিজ্ঞতা উন্নত করেছি।',
        'HR Tech': 'এইচআর টেক',
        'Tenrol - The future of hiring': 'Tenrol - নিয়োগের ভবিষ্যৎ',
        'The overall aim of management software is to hire employees and including interview process and review': 'এই ম্যানেজমেন্ট সফটওয়্যার কর্মী নিয়োগ, সাক্ষাৎকার প্রক্রিয়া ও মূল্যায়ন সহজ করে।',
        'Productivity Tool': 'প্রোডাক্টিভিটি টুল',
        'Upload Image:': 'ছবি আপলোড:',
        'Choose an image file to edit.': 'সম্পাদনার জন্য একটি ছবি বেছে নিন।',
        'Apply Filters:': 'ফিল্টার প্রয়োগ:',
        'Adjust filters like brightness and saturation using intuitive controls.': 'সহজ কন্ট্রোল দিয়ে উজ্জ্বলতা ও স্যাচুরেশনের মতো ফিল্টার ঠিক করুন।',
        'Edit & Save:': 'সম্পাদনা ও সংরক্ষণ:',
        'Rotate, flip, and preview changes before saving the edited image.': 'সম্পাদিত ছবি সংরক্ষণের আগে ঘোরান, ফ্লিপ করুন ও পরিবর্তন দেখুন।',
        'AI Experience': 'এআই এক্সপেরিয়েন্স',
        'Start/Stop Voice Recognition with a clean, intuitive UI 🎙️': 'সহজ ইন্টারফেসে ভয়েস শনাক্তকরণ শুরু বা বন্ধ করুন 🎙️',
        'Text-to-Voice Conversion:': 'টেক্সট-টু-ভয়েস রূপান্তর:',
        'Enter text and let the app speak it back!': 'লেখা দিন এবং অ্যাপকে সেটি পড়ে শোনাতে দিন!',
        'Modern design with interactive animations, making it user-friendly and engaging.': 'ইন্টারঅ্যাকটিভ অ্যানিমেশনসহ আধুনিক ও ব্যবহারবান্ধব ডিজাইন।',
        'Responsive layout for seamless use across devices 🌐': 'সব ডিভাইসে নির্বিঘ্ন ব্যবহারের জন্য রেসপনসিভ লেআউট 🌐',
        'Business Utility': 'ব্যবসায়িক ইউটিলিটি',
        'Any kind of invoice for any kind of store can be made bu using it, its all text are editable.': 'যেকোনো ধরনের দোকানের জন্য সম্পাদনাযোগ্য ইনভয়েস তৈরি করা যায়।',
        'Its calculation is automated.': 'হিসাব স্বয়ংক্রিয়ভাবে সম্পন্ন হয়।',
        'After making invoice, you can download as pdf': 'ইনভয়েস তৈরির পর PDF হিসেবে ডাউনলোড করা যায়।',
        'E-commerce': 'ই-কমার্স',
        'Commercify is an online shop that makes shopping easy. Order online or visit one of our Hubs or Agents to place your order, pick up your delivery or get any after sales service you need!': 'Commercify একটি অনলাইন শপ যা কেনাকাটা সহজ করে। অনলাইনে অর্ডার করুন অথবা হাব বা এজেন্টের মাধ্যমে অর্ডার, ডেলিভারি সংগ্রহ ও বিক্রয়োত্তর সেবা নিন।',
        'Used stack:': 'ব্যবহৃত প্রযুক্তি:',
        'Let’s build reliable products': 'চলুন নির্ভরযোগ্য প্রোডাক্ট তৈরি করি',
        'Need a QA partner or product engineer?_': 'কিউএ পার্টনার বা প্রোডাক্ট ইঞ্জিনিয়ার প্রয়োজন?_',
        'Email Me': 'ইমেইল করুন',
        'Call Now': 'কল করুন'
    };
    var reverseTranslations = Object.keys(translations).reduce(function(result, source) {
        result[translations[source]] = source;
        return result;
    }, {});
    var originalText = new WeakMap();

    function normalize(value) {
        return value.replace(/\s+/g, ' ').trim();
    }

    function setLanguage(language) {
        var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        var node;

        while ((node = walker.nextNode())) {
            if (node.parentElement.closest('script, style, noscript')) {
                continue;
            }

            if (!originalText.has(node)) {
                var currentKey = normalize(node.nodeValue);
                var sourceText = reverseTranslations[currentKey];
                originalText.set(node, sourceText ? node.nodeValue.replace(node.nodeValue.trim(), sourceText) : node.nodeValue);
            }

            var original = originalText.get(node);
            var key = normalize(original);
            var translated = translations[key];
            node.nodeValue = language === 'bn' && translated ? original.replace(original.trim(), translated) : original;
        }

        root.lang = language;
        root.style.setProperty('--live-label', language === 'bn' ? '"লাইভ প্রোডাক্ট"' : '"Live product"');
        root.style.setProperty('--live-action', language === 'bn' ? '"লাইভ প্রোডাক্ট দেখুন  ↗"' : '"View live product  ↗"');
        document.title = language === 'bn' ? 'আমরান মুহাম্মদ | সফটওয়্যার ইঞ্জিনিয়ার' : 'Amran Muhammad | Software Engineer';
        $('#projectSearch').attr('placeholder', language === 'bn' ? 'প্রকল্প বা প্রযুক্তি খুঁজুন' : 'Search projects or technology');
        $('.language-toggle__label').text(language === 'bn' ? 'EN' : 'বাংলা');
        $('.language-toggle').attr('aria-label', language === 'bn' ? 'ইংরেজিতে দেখুন' : 'বাংলায় দেখুন');
        $('.portfolio-toolbar').attr('aria-label', language === 'bn' ? 'প্রকল্প ফিল্টার করুন' : 'Filter projects');
        $('.portfolio-menu').attr('aria-label', language === 'bn' ? 'প্রকল্পের বিভাগ' : 'Project categories');
        $('.site-preferences').attr('aria-label', language === 'bn' ? 'প্রদর্শন পছন্দ' : 'Display preferences');
        $('.menu__mobile-button').attr('aria-label', language === 'bn' ? 'মেনু খুলুন' : 'Open menu');
        localStorage.setItem('site-language', language);
        setTheme(root.getAttribute('data-theme') || 'dark');
    }

    function setTheme(theme) {
        root.setAttribute('data-theme', theme);
        var isDark = theme === 'dark';
        $('.theme-toggle i').attr('class', isDark ? 'fa fa-sun-o' : 'fa fa-moon-o');
        $('.theme-toggle').attr('aria-label', root.lang === 'bn'
            ? (isDark ? 'লাইট মোড চালু করুন' : 'ডার্ক মোড চালু করুন')
            : (isDark ? 'Switch to light mode' : 'Switch to dark mode'));
        localStorage.setItem('site-theme', theme);
    }

    $('.language-toggle').on('click', function() {
        setLanguage(root.lang === 'bn' ? 'en' : 'bn');
    });

    $('.theme-toggle').on('click', function() {
        setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });

    var savedLanguage = localStorage.getItem('site-language') || 'en';
    var savedTheme = localStorage.getItem('site-theme') || root.getAttribute('data-theme') || 'dark';
    setLanguage(savedLanguage);
    setTheme(savedTheme);
})();
