interface Service {
    slug: string;
    title: string;
    heroTitle: string;
    heroImage: string;
    description: string;
    treatableConditions?: string[];
}

export const servicesData: Service[] = [
    {
        slug: 'general-physiotherapy',
        title: 'General Physiotherapy',
        heroTitle: 'General Physiotherapy',
        heroImage: '/service-img-2.jpg',
        description: `Our Physiotherapists are experts in movement and function who work in partnership with their patients, assisting them to overcome movement disorders, which may have been present from birth, acquired through accident or injury, or are the result of ageing or life-changing events.
        
At Revix Physiotherapy, we use only individually tailored approach. Our Physiotherapist are thorough with assessment, diagnosis, and treatment which is client centric and based on evidences in research. The aim of our physiotherapy service is to aid in one’s recovery and maximise their potential for healing, helping them to return to sport or optimal daily function as soon as is possible. Our Physios pride themselves in their hands on, evidence based approach to physiotherapy treatment, support, education and exercise prescription and go beyond just treating a single injury.
        
We can help you if you are experiencing pain, movement limitation or dysfunction, weakness, changes to sensation (in the form of pins and needles or numbness), and/or impaired function in the activities of daily living. Our Physiotherapists will use a variety of treatment techniques, and these do depend on the particular patient presentation. So whether you are returning to work, sport or simply looking to achieve fitness and lifestyle goals let our highly-qualified Physiotherapists assist you to achieve your Goals.`,
        treatableConditions: [
            'Sports injuries',
            'Acute and chronic pain',
            'Back and neck pain',
            'Headache',
            'Peripheral joint pain',
            'Workers compensation and Motor vehicle accident claims',
            'Hand injuries',
            'Women’s health including Pregnancy related pain and incontinence',
            'Rehabilitation post orthopaedic and neurology surgery',
            'Old age rehabilitation',
            'Arthritis and chronic pain',
            'Casting, Splinting and camboot fitting',
        ],
    },
    {
        slug: 'aged-care-physiotherapy',
        title: 'Aged-Care Physiotherapy',
        heroTitle: 'Aged-Care Physiotherapy',
        heroImage: '/service-img-2.jpg',
        description: `We provide physiotherapy services to nursing homes, hostels and retirement villages. We also do home visits for DVA and other patients. Our team of experienced health professionals are passionate about working in aged care and strive towards improving quality of life for all residents. Physiotherapists apply diagnostic skills and clinical reasoning to deliver the best treatments for their clients, helping to improve movement and physical independence. Our Physiotherapists provide treatments including pain management, manual therapies and exercise prescription. These programs are tailored to client’s individual needs, helping to reduce pain and optimise strength, mobility and physical independence.

Our established physiotherapy team consists of well-trained health professionals who have experience working in aged care. Our senior physiotherapist have extensive experience in aged care, providing ongoing mentoring and professional development to staff. Our sound clinical reasoning and treatment skills results in best practise treatment and management. Our physiotherapists are working continuously to make an impact in the lives of the elderly population and optimise their functional abilities. Our physiotherapists use a wide range of treatment techniques to relieve pain, restore movement and function, and prevent further problems for the residents. They also provide treatments such as exercise prescription which are tailored programs to help retrain posture, strengthen muscles and improve overall fitness.

Through our unique physiotherapy assessments, treatments, acute and chronic pain management programs we can help your residents enjoy a more fulfilling life. Our comprehensive education and training solutions will also help facility management and staff provide the best possible care in a safe working environment.

Strong happy relationships are our thing. We will become a part of your team.`,
        treatableConditions: [
            'Chronic Pain Management Program (ACFI 4a and 4b)',
            'Mobility assessment and treatment (ACFI approved)',
            'Manual handling training',
            'Comprehensive Physiotherapy Assessments',
            'Individualised resident therapy plans',
            'Falls prevention and awareness program',
            'Group Exercise Classes',
            'One to one physiotherapy consultations',
            'DVA client treatments',
            'Medicare funded physiotherapy consultations',
        ],
    },
    {
        slug: 'ndis-home-visit',
        title: 'NDIS & Home Visit',
        heroTitle: 'NDIS & Home Visit',
        heroImage: '/service-img-2.jpg',
        description: `The National Disability Insurance Scheme (NDIS) is an Australian Government initiative to help participants living with a disability access healthcare and other services they require. The NDIS is a funding tool designed for people living with a significant and permanent disability. 

Revix Physiotherapy is a Registered NDIS Provider and can help you achieve your goals through your NDIS plan. We provide evidence-based exercise programs to improve strength, mobility, flexibility, endurance and quality of life.`,
        treatableConditions: [
            'Stroke',
            'Cerebral Palsy',
            'Developmental delay',
            'Motor neuron disease',
            'Multiple sclerosis',
            'Nerve damage',
            'Alzheimer’s disease',
            'Traumatic Brain injury',
            'Parkinson’s disease',
            'Hydrocephalous',
            'Spinal cord injury',
            'Brain injury',
            'Intellectual disability',
            'Genetic conditions',
            'Blindness',
            'Amputation',
            'Chronic back, neck and limb pain',
            'Autism',
            'Muscle weakness and tightness',
            'Walking problems',
            'Overall deteriorating health conditions',
        ],
    },
    // The other services will be added here later
];
