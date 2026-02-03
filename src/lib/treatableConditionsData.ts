/**
 * This file defines the data structure for the "What We Treat" pages.
 * Each object in the array represents a specific condition (e.g., Spine, Headache).
 * The sections array is designed to be flexible, supporting both text-on-left/image-on-right
 * and text-on-right/image-on-left layouts, as well as sections with no images.
 */

// Define the shape of a single content section.
export interface ConditionSection {
    title: string;
    description: string;
    image?: string; // Image is optional to handle pages like 'Post-Surgical Rehab'
    imageAlt?: string;
}

// Define the shape of the full condition page data.
export interface TreatableCondition {
    slug: string;
    heroTitle: string;
    heroImage: string;
    sections: ConditionSection[];
}

// Array of all treatable conditions with SEO-friendly content.
export const treatableConditions: TreatableCondition[] = [
    {
        slug: 'spine',
        heroTitle: 'Spine',
        heroImage: '/what-do-we-treat/spine.jpg',
        sections: [
            {
                title: 'Rib Trauma',
                description:
                    'Rib trauma can result from direct impact, falls, or repetitive strain. Symptoms often include sharp chest pain, discomfort while breathing, and tenderness in the rib area. Early physiotherapy helps reduce pain, improve breathing mechanics, and prevent long-term complications such as restricted mobility or chronic pain.',
                image: '/what-do-we-treat/rib-trauma.png',
                imageAlt: 'Anatomy of a rib cage',
            },
            {
                title: 'Low Back Pain',
                description:
                    'Low back pain is one of the most common musculoskeletal complaints, often caused by poor posture, disc issues, or muscle strain. It can lead to stiffness, radiating leg pain, and difficulty performing daily activities. Physiotherapy focuses on pain relief, core strengthening, and posture correction to restore function and prevent recurrence.',
                image: '/what-do-we-treat/lower-back.jpg',
                imageAlt: 'Anatomy of the lower back',
            },
            {
                title: 'Sacroiliac Joint Disorder',
                description:
                    'The sacroiliac (SI) joint connects the spine to the pelvis and can become inflamed or unstable due to trauma, arthritis, or pregnancy. This disorder often causes deep buttock or lower back pain that may radiate to the legs. Treatment commonly involves manual therapy, stabilizing exercises, and pain management strategies.',
                image: '/what-do-we-treat/sacroiliac-joint-disorder.png',
                imageAlt: 'Diagram of sacroiliac joint',
            },
        ],
    },
    {
        slug: 'headache',
        heroTitle: 'Headache',
        heroImage: '/what-do-we-treat/headache.jpg',
        sections: [
            {
                title: 'Tension Headaches',
                description:
                    'Tension headaches are usually caused by stress, muscle tightness, or poor posture. They are characterized by a dull, pressure-like pain around the forehead or back of the head and neck. Physiotherapy can help by reducing muscle tension, improving posture, and teaching relaxation techniques to prevent recurrence.',
                image: '/what-do-we-treat/headache.jpg',
                imageAlt: 'Person with a headache',
            },
            {
                title: 'Migraines',
                description:
                    'Migraines are intense headaches often accompanied by nausea, light sensitivity, and visual disturbances. They can be triggered by stress, hormonal changes, or certain foods. While medications may provide relief, physiotherapy can help reduce frequency and intensity by addressing musculoskeletal triggers and lifestyle factors.',
                image: '/what-do-we-treat/headache.jpg',
                imageAlt: 'A diagram showing a migraine',
            },
        ],
    },
    {
        slug: 'shoulder',
        heroTitle: 'Shoulder',
        heroImage: '/what-do-we-treat/shoulder.jpg',
        sections: [
            {
                title: 'Rotator Cuff Strain',
                description:
                    'The rotator cuff is a group of four small muscles that stabilize and rotate the shoulder joint. A rotator cuff strain occurs when one or more of these muscles are overstretched or torn, often due to sudden arm movements or repetitive overhead activities. Symptoms include shoulder pain, weakness, and difficulty lifting the arm. Early management with rest, ice, and physiotherapy is key to reducing swelling and restoring mobility.',
                image: '/what-do-we-treat/rotator-cuff-strain.jpg',
                imageAlt: 'Anatomical diagram of the rotator cuff',
            },
            {
                title: 'Frozen Shoulder',
                description:
                    'Frozen shoulder (adhesive capsulitis) happens when the capsule surrounding the shoulder joint becomes inflamed and stiff, severely restricting movement. It commonly affects middle-aged individuals and may follow injury, surgery, or prolonged immobility. The condition causes deep, persistent shoulder pain and progressive stiffness. Treatment focuses on reducing pain and restoring range of motion through physiotherapy, stretching, and strengthening exercises.',
                image: '/what-do-we-treat/frozen-shoulder.png',
                imageAlt: 'Illustration of frozen shoulder joint stiffness',
            },
        ],
    },
    {
        slug: 'elbow',
        heroTitle: 'Elbow',
        heroImage: '/what-do-we-treat/elbow.jpg',
        sections: [
            {
                title: 'Tennis Elbow',
                description:
                    'Tennis elbow, or lateral epicondylitis, is caused by irritation and inflammation of the tendons on the outer side of the elbow. These tendons attach to forearm muscles responsible for extending the wrist and fingers. It commonly develops from repetitive wrist and hand movements such as sports, typing, or manual work. Early signs include pain when gripping, lifting, or twisting objects. Left untreated, the condition can worsen and restrict daily activities. Physiotherapy management may include activity modification, massage, stretching, and progressive strengthening to restore tendon health.',
                image: '/what-do-we-treat/tennis-elbow.png',
                imageAlt: 'Illustration showing tennis elbow pain points',
            },
            {
                title: 'Olecranon Bursitis',
                description:
                    'Olecranon bursitis, also known as “student’s elbow,” occurs when the fluid-filled sac at the tip of the elbow becomes inflamed. This bursa cushions the skin and bone, reducing friction during movement. Inflammation may result from direct trauma, prolonged leaning on the elbow, or repetitive pressure. Symptoms include swelling, tenderness, and discomfort when resting on or bending the elbow. A visible lump may also form at the back of the joint. Rest, ice, and physiotherapy interventions such as activity modification, gentle exercises, and inflammation control help speed up recovery.',
                image: '/what-do-we-treat/olecranon-bursitus.jpg',
                imageAlt: 'Diagram of olecranon bursitis swelling',
            },
        ],
    },
    {
        slug: 'wrist',
        heroTitle: 'Wrist & Hand',
        heroImage: '/what-do-we-treat/wrist.jpg',
        sections: [
            {
                title: 'Scaphoid Fracture',
                description:
                    'A scaphoid fracture is a break in one of the small wrist bones, usually caused by a fall onto an outstretched hand. It often produces pain near the base of the thumb, worsened by gripping or wrist movement. Unlike typical fractures, scaphoid injuries may not cause severe deformity or intense pain, which leads many people to overlook them. However, untreated scaphoid fractures can prevent proper bone healing, prolong recovery, and increase the risk of long-term wrist dysfunction. Physiotherapy supports recovery by promoting bone healing and restoring wrist strength and stability.',
                image: '/what-do-we-treat/scaphoid-fracture.jpg',
                imageAlt: 'X-ray of a scaphoid fracture in the wrist',
            },
            {
                title: 'Carpal Tunnel Syndrome',
                description:
                    'Carpal tunnel syndrome occurs when the median nerve is compressed as it travels through the narrow carpal tunnel in the wrist. This nerve shares space with nine flexor tendons, and inflammation of these tendons can crowd the tunnel and pinch the nerve. Symptoms include tingling, numbness, weakness, or pain in the hand and fingers, often aggravated by repetitive wrist movements. Physiotherapy management includes activity modification, wrist splinting, and targeted exercises to relieve pressure on the nerve and restore function.',
                image: '/what-do-we-treat/carpel-tunnel.jpg',
                imageAlt: 'Illustration showing median nerve compression in carpal tunnel syndrome',
            },
        ],
    },
    {
        slug: 'hip',
        heroTitle: 'Hip & Thigh',
        heroImage: '/what-do-we-treat/hip.jpg',
        sections: [
            {
                title: 'Stress Fracture of the Femoral Neck',
                description:
                    'A femoral neck stress fracture is a small crack or partial break at the top of the thigh bone where it connects to the pelvis. These fractures occur when repetitive stress outpaces the body’s ability to repair bone tissue, often during high-impact or weight-bearing activity. Symptoms usually begin gradually as a dull ache in the groin or deep within the hip, which worsens with exercise, walking, or even at rest. Left untreated, this injury can progress and delay recovery, but with early physiotherapy and activity modification, long-term effects are unlikely. Treatment typically includes crutch-assisted walking in the early phase, followed by targeted stretching, soft tissue release, and progressive strengthening to restore hip stability and function.',
                image: '/what-do-we-treat/femoral-neck.png',
                imageAlt: 'Diagram of femoral neck stress fracture in the hip joint',
            },
            {
                title: 'Piriformis Syndrome',
                description:
                    'Piriformis syndrome develops when the small piriformis muscle in the buttock becomes tight or irritated, placing pressure on nearby nerves and causing pain in the buttock with possible tingling down the leg. The condition often arises from repetitive microtrauma, muscle strain, or prolonged sitting. Pain typically increases with hip movement or deep stretching. Physiotherapy management focuses on relieving muscle tension through soft tissue massage, stretching, and electrotherapy, while also correcting gluteal weakness that often accompanies the condition. Long-term recovery involves progressive strengthening, coordination training, and activity modifications to reduce recurrence.',
                image: '/what-do-we-treat/piriformis-syndrome.png',
                imageAlt: 'Illustration showing the piriformis muscle pressing on the sciatic nerve',
            },
            {
                title: 'Hamstring Strain',
                description:
                    'A hamstring strain is a tear of the muscle fibers at the back of the thigh, usually occurring during sudden acceleration or deceleration in sports. Patients often describe a sharp pain or tearing sensation during activity, followed by tightness, swelling, and difficulty walking in more severe cases. Early intervention is crucial — the first 24–48 hours should focus on controlling swelling with rest, ice, compression, and elevation (RICE). Physiotherapy treatment helps accelerate recovery with electrotherapy, massage, stretching, and taping in the early stages. As healing progresses, structured stretching and strengthening programs are introduced to restore muscle balance, reduce stiffness, and prevent reinjury.',
                image: '/what-do-we-treat/hamstring-strain.jpg',
                imageAlt: 'Diagram of hamstring muscle strain at the back of the thigh',
            },
        ],
    },
    {
        slug: 'knee',
        heroTitle: 'Knee',
        heroImage: '/what-do-we-treat/knee.jpg',
        sections: [
            {
                title: 'Ligamentous and Meniscus Injury',
                description:
                    'Meniscus injuries occur when the cartilage discs inside the knee joint are damaged, often due to twisting or sudden directional changes while the foot is fixed. These cartilages act as natural shock absorbers, and injury may also involve the anterior cruciate ligament (ACL) or medial collateral ligament (MCL). Common symptoms include knee pain, swelling, weakness, instability, and sensations of locking, clicking, or giving way. Because the meniscus has poor blood supply, healing is limited without proper care. Physiotherapy management focuses on reducing swelling, restoring mobility, retraining gait, and strengthening surrounding muscles. In more complex cases, surgery or injections may be required if additional ligaments are involved.',
                image: '/what-do-we-treat/ligamentous-injury.png',
                imageAlt: 'Diagram of knee meniscus and ligament injury',
            },
            {
                title: 'Anterior Cruciate Ligament (ACL) Injury',
                description:
                    'An ACL injury refers to a tear of one of the key stabilizing ligaments of the knee, most commonly sustained during sports involving jumping, pivoting, or rapid deceleration. It may also result from direct trauma, such as another player falling onto the knee. Many patients report hearing a “pop” at the time of injury, followed by rapid swelling and instability. Severe ACL tears usually require reconstructive surgery using tendon grafts, with recovery taking 9–12 months or longer. Physiotherapy plays a critical role both before and after surgery, helping to reduce swelling, restore range of motion, and gradually rebuild strength and stability to ensure safe return to sport and daily activities.',
                image: '/what-do-we-treat/acl-injury.png',
                imageAlt: 'Illustration showing ACL tear inside the knee joint',
            },
            {
                title: 'Patellofemoral Pain Syndrome',
                description:
                    'Patellofemoral pain syndrome, also known as “runner’s knee” or chondromalacia patella, causes pain around or behind the kneecap due to irritation where the patella glides along the thigh bone. It is often triggered by overuse, poor biomechanics, or prolonged sitting with bent knees. Patients typically report aching, grinding, or a sense of the knee giving way, particularly when running, climbing stairs, or sitting for long periods. While it usually does not cause long-term damage, untreated cases can limit activity and quality of life. Physiotherapy treatment involves activity modification, soft tissue release, taping techniques, strengthening of the quadriceps and hip muscles, and retraining of knee alignment to relieve pain and prevent recurrence.',
                image: '/what-do-we-treat/pain-syndrome.png',
                imageAlt: 'Diagram showing kneecap movement in patellofemoral syndrome',
            },
        ],
    },
    {
        slug: 'ankle-foot',
        heroTitle: 'Ankle & Foot',
        heroImage: '/what-do-we-treat/ankle.jpg',
        sections: [
            {
                title: 'Ligament Injury / Ankle Sprain (Rolled Ankle)',
                description:
                    'An ankle sprain occurs when the ligaments on the outer side of the ankle are overstretched or torn, often during sudden twists, uneven surfaces, or sports-related movements. This is commonly referred to as a “rolled ankle.” Symptoms may include sharp pain, swelling, bruising, and difficulty bearing weight. In some cases, patients also report a snapping or popping sound at the time of injury. Most sprains recover within weeks, but poor management can lead to chronic instability, reduced mobility, and a higher risk of reinjury. Physiotherapy treatment focuses on restoring range of motion, strengthening the surrounding muscles, improving balance and proprioception, and preventing future injuries through taping, bracing, or footwear advice.',
                image: '/what-do-we-treat/rolled-ankle.jpg',
                imageAlt: 'Illustration showing ligament injury from a rolled ankle',
            },
            {
                title: 'Plantar Fasciitis',
                description:
                    'Plantar fasciitis is one of the most common causes of heel pain, caused by irritation of the thick band of tissue (plantar fascia) that runs along the bottom of the foot. It often develops from repetitive stress, poor biomechanics, or high-impact activities like running and dancing. Patients typically describe sharp heel pain during the first steps in the morning or after prolonged rest, which may worsen with exercise. Ignoring symptoms can prolong recovery and increase the risk of chronic pain. Physiotherapy management includes correcting foot mechanics, stretching the plantar fascia and calf muscles, strengthening supportive structures, taping, footwear recommendations, and gradual return to activity.',
                image: '/what-do-we-treat/plantar-fasciitis.png',
                imageAlt: 'Diagram showing plantar fascia on the bottom of the foot',
            },
            {
                title: 'Achilles Tendinopathy',
                description:
                    'Achilles tendinopathy (previously referred to as Achilles tendonitis) is an overuse injury of the Achilles tendon, which connects the calf muscles to the heel bone. It commonly affects runners, jumpers, and individuals who rapidly increase training intensity. Risk factors include poor footwear, flat or high-arched feet, tight calf or hamstring muscles, and repetitive hill running. Symptoms include pain and stiffness in the back of the heel, often worse with activity or first thing in the morning. If untreated, it can progress to long-term weakness or tendon rupture. Physiotherapy treatment involves soft tissue mobilization, stretching tight muscles, eccentric strengthening exercises, gait retraining, footwear advice, and gradual return-to-sport programs.',
                image: '/what-do-we-treat/achilles-tendinopathy.jpg',
                imageAlt: 'Illustration of Achilles tendon inflammation and injury',
            },
        ],
    },

    {
        slug: 'post-surgical',
        heroTitle: 'Post-Surgical Rehab',
        heroImage: '/what-do-we-treat/post-surgical.jpg',
        sections: [
            {
                title: 'Rehabilitation Process',
                description:
                    'Surgery is only the first step toward recovery. Post-surgical rehabilitation plays a critical role in regaining mobility, strength, and function. Early physiotherapy helps prevent complications like stiffness, weakness, or poor healing. Individualized exercise programs and hands-on therapy ensure safe and effective recovery tailored to your procedure.',
            },
            {
                title: 'Common Surgeries Requiring Post-Operative Care',
                description:
                    'Shoulder: Reconstruction, Stabilisation, Rotator Cuff Repair, Acromioplasty, Manipulation, Capsulotomy, Fracture\n\nElbow: Tennis Elbow Release, Golfers Elbow Release, Fracture\n\nWrist & Hand: Carpal Tunnel Release, Fracture, Tendon Repairs\n\nHip: Replacements/Resurfacing, Labral Repairs, Arthroscope, Fracture',
            },
        ],
    },

    {
        slug: 'sports-injuries',
        heroTitle: 'Sports Injuries',
        heroImage: '/what-do-we-treat/sports-injuries.jpg',
        sections: [
            {
                title: 'Overview',
                description:
                    'Sports injuries are common among athletes and active individuals, often caused by poor training methods, muscle imbalances, structural abnormalities, or unsafe exercise environments. Strains and sprains are among the most frequent injuries, affecting muscles, tendons, and ligaments. Without proper management, these injuries can lead to chronic pain, reduced performance, or long-term joint instability.',
            },
            {
                title: 'Examples of Common Sports Injuries',
                description:
                    '• Ankle sprain\n• Groin pull\n• Hamstring strain\n• Shin splints\n• Knee injuries such as ACL tears and patellofemoral pain syndrome\n• Tennis elbow (epicondylitis)\n\nThese injuries often present with pain, swelling, loss of strength, or restricted movement, and early intervention is key to optimal recovery.',
            },
            {
                title: 'Physiotherapy and Recovery',
                description:
                    'Physiotherapy plays a vital role in sports injury management by restoring mobility, strength, and function. Treatment may include joint and soft tissue mobilization, corrective exercise programs, taping, and retraining of sporting techniques. Attempting to return to sport too soon increases the risk of reinjury. With professional assessment and a progressive rehabilitation plan, athletes can safely return to peak performance while reducing the likelihood of future setbacks.',
            },
        ],
    },
];
