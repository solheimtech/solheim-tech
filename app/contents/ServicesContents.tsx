import { createContext, useContext, ReactNode, useEffect, useState } from 'react';

type ServiceItem = {
  id: number;
  modelUrl?: string;
  slug: string;
  imgSrc: string;
  alt?: string;
  header: {
    title: string;
    description: string;
  };
  subHeader: {
    title: string;
    description: string;
  };
  features: {
    title: string;
    description: string;
  }[];
};

const serviceItems: ServiceItem[] = [
  {
    id: 1,
    slug: "local-seo-pro",
    modelUrl: '/assets/3d/scene.gltf',
    imgSrc: "/assets/images/local-seo-pro.svg",
    alt: "A service image",
    header: {
        title: "Dominate Local Search with Our SEO Expertise",
        description: "Our local SEO services help businesses like yours increase their online visibility, drive more targeted traffic, and generate more qualified leads in your local market."
    },
    subHeader: {
        title: "Unleash Your Local SEO Potential",
        description: "Our local SEO services are tailored to help your business dominate your local market and drive more qualified leads."
    },
    features: [
        {
            title: "Enhanced Local Search Visibility",
            description: "Optimize your website and online listings to rank higher in local search results."
        },{
            title: "Boosted Website Traffic",
            description: "Drive more targeted, high-intent traffic to your website from local searches."
        },{
            title: "Increased Qualified Leads",
            description: "Convert more website visitors into leads and customers with our proven strategies."
        }
    ],
  },
  {
    id: 2,
    slug: "website-design",
    imgSrc: "/assets/images/web-design.svg",
    alt: "A website design service image",
    header: {
        title: "Transform Your Online Presence with Our Website Design Services",
        description: "Our website design services focus on creating visually stunning, user-friendly, and optimized websites that drive results for your business."
    },
    subHeader: {
        title: "Elevate Your Web Presence",
        description: "Our team of experts crafts custom websites tailored to your business goals, ensuring a unique and engaging user experience."
    },
    features: [
        {
            title: "Custom Design Solutions",
            description: "Get a unique website design that reflects your brand's identity and resonates with your target audience."
        },{
            title: "Responsive and Mobile-Friendly",
            description: "Ensure a seamless user experience across all devices with our responsive and mobile-friendly designs."
        },{
            title: "Search Engine Optimization",
            description: "Optimize your website for search engines to improve visibility and drive more organic traffic."
        }
    ],
  },
  {
    id: 3,
    slug: "cloud-hosting",
    imgSrc: "/assets/images/cloud-hosting.svg",
    alt: "A cloud hosting service image",
    header: {
        title: "Reliable and Scalable Cloud Hosting Solutions",
        description: "Our cloud hosting services ensure your website is always available, secure, and scalable to meet your growing business needs."
    },
    subHeader: {
        title: "Power Your Online Presence",
        description: "Experience fast, secure, and reliable cloud hosting solutions tailored to your business requirements."
    },
    features: [
        {
            title: "Scalability and Flexibility",
            description: "Scale your resources up or down as needed to match your business growth."
        },{
            title: "Enhanced Security",
            description: "Protect your website and data with our robust security features and regular backups."
        },{
            title: "24/7 Support",
            description: "Get instant support from our team of experts to ensure your website is always running smoothly."
        }
    ],
  },
  {
    id: 4,
    slug: "content-marketing",
    imgSrc: "/assets/images/content-marketing.svg",
    alt: "A content marketing service image",
    header: {
        title: "Craft Compelling Content to Engage Your Audience",
        description: "Our content marketing services help you create and distribute valuable content to attract and retain a clearly defined audience."
    },
    subHeader: {
        title: "Tell Your Story",
        description: "Develop a content strategy that resonates with your target audience and drives business results."
    },
    features: [
        {
            title: "Content Strategy",
            description: "Develop a tailored content strategy aligned with your business goals and target audience."
        },{
            title: "Content Creation",
            description: "Create high-quality, engaging content that speaks to your audience and drives conversions."
        },{
            title: "Content Distribution",
            description: "Distribute your content across the right channels to reach your target audience effectively."
        }
    ],
  },
  {
    id: 5,
    slug: "graphic-design",
    imgSrc: "/assets/images/graphic-design.svg",
    alt: "A graphic design service image",
    header: {
        title: "Elevate Your Brand with Our Graphic Design Services",
        description: "Our graphic design services focus on creating visually appealing and effective designs that enhance your brand's identity."
    },
    subHeader: {
        title: "Visual Storytelling",
        description: "Communicate your brand's message effectively through visually stunning graphic designs."
    },
    features: [
        {
            title: "Logo Design",
            description: "Create a unique and memorable logo that represents your brand's identity."
        },{
            title: "Brochure Design",
            description: "Design eye-catching brochures that effectively communicate your brand's message."
        },{
            title: "Infographic Design",
            description: "Transform complex information into engaging and easy-to-understand infographics."
        }
    ],
  },
  {
    id: 6,
    slug: "search-engine-optimization",
    imgSrc: "/assets/images/search-engine-optimization.svg",
    alt: "A search engine optimization service image",
    header: {
        title: "Boost Your Online Visibility with SEO",
        description: "Our search engine optimization services help you increase your website's visibility, drive more traffic, and generate leads."
    },
    subHeader: {
        title: "Rank Higher, Reach Further",
        description: "Optimize your website to rank higher in search engines and reach a wider audience."
    },
    features: [
        {
            title: "Keyword Research",
            description: "Identify and target the most relevant keywords for your business to improve search engine rankings."
        },{
            title: "On-Page Optimization",
            description: "Optimize your website's elements to make it search engine friendly and improve rankings."
        },{
            title: "Link Building",
            description: "Build high-quality backlinks to increase your website's authority and search engine rankings."
        }
    ],
  },
  {
    id: 7,
    slug: "social-media",
    imgSrc: "/assets/images/social-media.svg",
    alt: "A social media service image",
    header: {
        title: "Grow Your Online Presence with Social Media",
        description: "Our social media services help you build a strong online presence, engage with your audience, and drive business results."
    },
    subHeader: {
        title: "Connect with Your Audience",
        description: "Develop a social media strategy that resonates with your target audience and drives business results."
    },
    features: [
        {
            title: "Social Media Strategy",
            description: "Develop a tailored social media strategy aligned with your business goals and target audience."
        },{
            title: "Content Creation",
            description: "Create engaging social media content that speaks to your audience and drives conversions."
        },{
            title: "Paid Advertising",
            description: "Run targeted social media ads to reach your audience effectively and drive business results."
        }
    ],
  },
  {
    id: 8,
    slug: "technology-management",
    imgSrc: "/assets/images/technology-management.svg",
    alt: "A technology management service image",
    header: {
        title: "Streamline Your Technology Operations",
        description: "Our technology management services help you optimize your technology infrastructure for improved efficiency and productivity."
    },
    subHeader: {
        title: "Optimize Your Tech",
        description: "Streamline your technology operations to improve efficiency, reduce costs, and enhance productivity."
    },
    features: [
        {
            title: "IT Consulting",
            description: "Get expert advice on technology solutions tailored to your business needs."
        },{
            title: "Network Security",
            description: "Protect your network and data from cyber threats with our robust security solutions."
        },{
            title: "Cloud Integration",
            description: "Integrate your technology infrastructure with the cloud for scalability and flexibility."
        }
    ],
  },
  {
    id: 9,
    slug: "website-management",
    imgSrc: "/assets/images/website-management.svg",
    alt: "A website management service image",
    header: {
        title: "Maximize Your Website's Potential",
        description: "Our website management services ensure your website is always up-to-date, secure, and optimized for performance."
    },
    subHeader: {
        title: "Keep Your Website Running Smoothly",
        description: "Ensure your website is always available, secure, and performing at its best."
    },
    features: [
        {
            title: "Website Maintenance",
            description: "Regularly update your website's software and plugins to ensure security and performance."
        },{
            title: "Performance Optimization",
            description: "Optimize your website's performance for faster loading times and improved user experience."
        },{
            title: "Security Monitoring",
            description: "Monitor your website for security threats and take proactive measures to prevent attacks."
        }
    ],
  },
  {
    id: 10,
    slug: "aerial-photography-and-videography",
    imgSrc: "/assets/images/aerial-photography-and-videography.svg",
    alt: "An aerial photography and videography service image",
    header: {
        title: "Capture Your Business from a New Perspective",
        description: "Our aerial photography and videography services provide unique visual content to showcase your business."
    },
    subHeader: {
        title: "Elevate Your Visual Story",
        description: "Capture stunning aerial visuals to tell your business story and engage your audience."
    },
    features: [
        {
            title: "Aerial Photography",
            description: "Capture high-quality aerial photos to showcase your business from a unique perspective."
        },{
            title: "Aerial Videography",
            description: "Create engaging aerial videos to tell your business story and captivate your audience."
        },{
            title: "Post-Production Services",
            description: "Enhance your aerial visuals with our post-production services for a polished finish."
        }
    ],
  }
];

const ServicesContentsContext = createContext<ServiceItem[]>(serviceItems);

export const useServicesContents = () => {
  const context = useContext(ServicesContentsContext);
  const [cachedImages, setCachedImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    const imageElements: HTMLImageElement[] = [];
    const newCachedImages = new Set(cachedImages);

    context.forEach(item => {
      if (!newCachedImages.has(item.imgSrc)) {
        const img = new window.Image();
        img.src = item.imgSrc;

        img.onload = () => {
          console.log(`Image ${item.imgSrc} preloaded successfully.`);
        };

        img.onerror = (e: any) => {
          console.error(`Error preloading image ${item.imgSrc}`, e);
        };

        imageElements.push(img);
        newCachedImages.add(item.imgSrc);
      }
    });

    if (imageElements.length > 0) {
      setCachedImages(newCachedImages);
    }

    // Cleanup function to remove image elements
    return () => {
      imageElements.forEach(image => image.remove());
    };
  }, [context]);

  return { context, cachedImages };
};

export const ServicesContentsProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ServicesContentsContext.Provider value={serviceItems}>
      {children}
    </ServicesContentsContext.Provider>
  );
};