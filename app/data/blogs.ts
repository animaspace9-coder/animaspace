export interface BlogStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface BlogInfographic {
  title: string;
  summary: string;
  steps: BlogStep[];
  altText: string;
}

export interface BlogSection {
  heading?: string;
  paragraphs: string[];
}

export interface BlogPostData {
  id: string;
  slug: string;
  title: string;
  category: string;
  publishedAt: string;
  date: string;
  readTime: string;
  author: string;
  colorClass: string;
  colorKey: "sky" | "pink" | "rose" | "mauve";
  excerpt: string;
  imageUrl?: string;
  sections: BlogSection[];
  reflectionQuote: string;
  infographic: BlogInfographic;
  infographicImageUrl: string;
  infographicImageAlt: string;
  editorialNote: string;
}

export const blogsPageContent = {
  heroTitle: "Blogs",
  heroSubtitle:
    "Practical guidance, research-backed perspectives, and real-world tools — written by Prashanthi Simon.",
  newsletterHeading: "More articles coming soon. Want to be notified?",
  newsletterSubtext:
    "Subscribe to receive new insights, clinical perspectives, and practical parenting tools from Anima Space.",
};

export const blogPosts: BlogPostData[] = [
  {
    id: "understanding-anxiety-in-children",
    slug: "understanding-anxiety-in-children",
    title: "Understanding Anxiety in Children: What Parents Need to Know",
    category: "Anxiety",
    publishedAt: "2026-08-26",
    date: "26 August 2026",
    readTime: "3 min read",
    author: "Prashanthi Simon",
    colorClass: "bg-[var(--color-brand-sky)]",
    colorKey: "sky",
    excerpt:
      "Anxiety is one of the most common challenges children face today. Learn how to spot the signs, respond with empathy, and know when to seek professional support.",
    infographicImageUrl: "/infographic-when-worry-speaks-childhood-anxiety-guide.jpg",
    infographicImageAlt: "Anima Space infographic: When Worry Speaks — a four-step guide for parents to notice anxiety patterns, name and validate feelings, nurture connection, and take one small next step with their child.",
    sections: [
      {
        paragraphs: [
          "Children do not always say, “I feel anxious.” Instead, anxiety may appear as stomach aches before school, repeated questions about what might happen, difficulty sleeping, irritability, tears, avoidance, or a sudden need to stay close to a parent. One difficult day does not automatically mean that a child has an anxiety disorder. Anxiety is a human response to uncertainty or perceived danger. It becomes important to look more closely when the worry is persistent, unusually intense, or begins to interfere with school, friendships, family life, sleep, or ordinary activities.",
        ],
      },
      {
        heading: "Look beyond the behaviour",
        paragraphs: [
          "A child who refuses to attend a birthday party may not be trying to be difficult. They may be worried about being judged, getting separated from a caregiver, or not knowing what will happen. A child who becomes angry when homework begins may be overwhelmed by fear of making mistakes. Behaviour is often the visible part of an emotional experience that the child does not yet have words for.",
          "Notice patterns rather than jumping to conclusions. Ask yourself: When does the worry appear? What seems to make it stronger? What helps the child feel safer? Tracking these details for a few days can help parents respond with understanding instead of reacting only to the surface behaviour.",
        ],
      },
      {
        heading: "Respond with connection first",
        paragraphs: [
          "Start by getting physically and emotionally close. Use a calm voice and simple language: “I can see that this feels scary,” or “Something about tomorrow is worrying you.” Validation does not mean agreeing that something terrible will happen. It means showing the child that their feelings make sense from their point of view.",
          "Then help the child separate the feeling from the prediction. You might say, “Your worry is telling you that you will not manage. Let us look at what you can do if the worry arrives.” This gently builds confidence without demanding that the child stop feeling anxious immediately.",
          "Small, predictable steps are usually more helpful than sudden pressure. If school drop-off is difficult, a consistent morning routine, a brief goodbye ritual, and a planned check-in may provide more support than a long negotiation. Praise brave effort, not just a successful outcome: “You felt worried and still took one step.”",
        ],
      },
      {
        heading: "When to seek support",
        paragraphs: [
          "Consider professional guidance when anxiety lasts for weeks, keeps returning, causes frequent physical complaints, disrupts sleep, prevents participation in age-appropriate activities, or places significant strain on the child or family. A qualified professional can help identify what is maintaining the anxiety and teach the child and caregivers practical coping strategies.",
          "The goal is not to remove every worry from childhood. It is to help children understand what they feel, experience safe support, and gradually discover that difficult feelings can be managed. With patience, predictable routines, and the right help when needed, anxiety can become a signal to listen to rather than a force that runs the whole family’s life.",
        ],
      },
    ],
    reflectionQuote:
      "A child does not need a perfect parent. They need a steady adult who is willing to pause, listen, and help them take the next manageable step.",
    infographic: {
      title: "When Worry Speaks",
      summary: "A calm four-step flow for families: Notice → Name → Nurture → Next step",
      steps: [
        {
          stepNumber: "01",
          title: "Notice Patterns",
          description:
            "Observe body cues (tummy aches, sleep changes, clinginess) and note triggers without jumping to immediate conclusions.",
        },
        {
          stepNumber: "02",
          title: "Name & Validate",
          description:
            "Use calm words: 'I can see this feels scary.' Help separate the anxious feeling from catastrophic predictions.",
        },
        {
          stepNumber: "03",
          title: "Nurture Connection",
          description:
            "Listen without rushing and provide steady reassurance before trying to jump into problem-solving mode.",
        },
        {
          stepNumber: "04",
          title: "Small Next Steps",
          description:
            "Take one manageable step together, praise brave efforts, and consult a professional if worry persistently limits life.",
        },
      ],
      altText:
        "Infographic showing how parents can respond to childhood anxiety: notice patterns, name and validate feelings, offer a small predictable step, and seek professional support when needed.",
    },
    editorialNote:
      "These articles are educational resources, not diagnoses or a substitute for professional care. If your child's distress is persistent, intense, or affects daily functioning, consider booking a consultation with a qualified psychologist.",
  },
  {
    id: "screen-time-and-mental-health",
    slug: "screen-time-and-mental-health",
    title: "Screen Time & Mental Health: Finding the Right Balance",
    category: "Wellbeing",
    publishedAt: "2026-08-26",
    date: "26 August 2026",
    readTime: "3 min read",
    author: "Prashanthi Simon",
    colorClass: "bg-[var(--color-brand-pink)]",
    colorKey: "pink",
    excerpt:
      "With screens ever-present in family life, what does the research actually say? We break down the evidence and share practical strategies for healthy boundaries.",
    infographicImageUrl: "/infographic-balanced-digital-day-screen-time-guide.jpg",
    infographicImageAlt: "Anima Space infographic: A Balanced Digital Day — practical family guide to protect sleep, mealtime connection, offline life, and evaluate screen use after-effects.",
    sections: [
      {
        paragraphs: [
          "Screens are part of everyday life. Children and adolescents use them to learn, communicate, create, relax, and maintain friendships. That means the most useful question is rarely “Are screens good or bad?” A better question is: What is this screen use doing in this child’s life?",
          "Research describes a mixed picture. Digital activities can offer connection and support, while problematic use can also be linked with sleep disruption, reduced participation in offline life, and difficulty controlling use. The relationship often works in both directions: emotional difficulties may lead to more technology use, and certain patterns of technology use may then make well-being harder to protect.",
        ],
      },
      {
        heading: "Focus on function, not only minutes",
        paragraphs: [
          "Two children may spend the same amount of time online and have very different experiences. One may be completing homework or talking to a trusted friend. Another may be scrolling late into the night, feeling worse after comparing themselves with others, or becoming distressed whenever the device is put away.",
          "Watch for the function and the after-effects. Does screen use leave the child restored, connected, and ready to return to daily life? Or does it regularly replace sleep, movement, meals, schoolwork, family conversations, and in-person relationships? Problematic use often appears through loss of control, withdrawal-like distress, neglect of offline activities, and friction in family life.",
        ],
      },
      {
        heading: "Build boundaries together",
        paragraphs: [
          "Rules are easier to follow when children understand the reason behind them and have some voice in shaping them. Start with a family conversation rather than a sudden confiscation. Agree on a few visible boundaries: devices away during meals, a charging place outside the bedroom, a wind-down period before sleep, and protected time for schoolwork, movement, hobbies, and face-to-face connection.",
          "Be specific about transitions. Give a ten-minute reminder, finish at a natural stopping point where possible, and name what comes next: “The game ends after this round, then we are having dinner.” Adults also need to model the boundaries they expect. A family digital plan works best when it protects everyone’s attention, not only the child’s.",
          "Avoid treating every difficult reaction as proof of addiction. Children may protest a limit because stopping an enjoyable activity is hard. Look for the broader pattern over time. If a child repeatedly cannot reduce use, loses sleep, abandons important activities, or experiences significant distress, a conversation with a qualified professional may help.",
        ],
      },
      {
        heading: "Aim for balance, not perfection",
        paragraphs: [
          "Healthy digital well-being is not a screen-free childhood. It is a life in which technology has a place without crowding out sleep, relationships, learning, play, and emotional recovery. Ask regularly: “Is this helping you feel connected or more drained?” and “What do you want your screen routine to make room for?”",
          "Small changes are meaningful. One device-free meal, one earlier charging time, or one shared outdoor activity can begin to reset the rhythm of a household. The goal is not to win a daily battle over screens. It is to help young people develop the awareness and skills to use technology without letting technology make every decision for them.",
        ],
      },
    ],
    reflectionQuote:
      "Boundaries are most effective when they protect connection rather than punish children for needing it.",
    infographic: {
      title: "A Balanced Digital Day",
      summary: "Technology should support life, not replace it.",
      steps: [
        {
          stepNumber: "01",
          title: "Protect Sleep",
          description:
            "Keep chargers outside the bedroom and build a 30–60 minute screen-free wind-down buffer before bedtime.",
        },
        {
          stepNumber: "02",
          title: "Mealtime Connection",
          description:
            "Designate family mealtimes as device-free zones to preserve attention, presence, and open conversation.",
        },
        {
          stepNumber: "03",
          title: "Offline Life First",
          description:
            "Ensure physical movement, schoolwork, creative play, and face-to-face friendships have protected time daily.",
        },
        {
          stepNumber: "04",
          title: "Evaluate the After-Effect",
          description:
            "Regularly ask whether screen activities leave your child feeling energized or drained and irritable.",
        },
      ],
      altText:
        "Infographic presenting a balanced digital day, balancing technology with sleep, connection, movement, learning, and offline enjoyment.",
    },
    editorialNote:
      "These articles are educational resources, not diagnoses or a substitute for professional care. If screen use is severely impacting sleep, mood, or family functioning, consider scheduling a consultation with Anima Space.",
  },
  {
    id: "talking-to-your-child-about-big-feelings",
    slug: "talking-to-your-child-about-big-feelings",
    title: "Talking to Your Child About Big Feelings",
    category: "Parenting",
    publishedAt: "2026-08-26",
    date: "26 August 2026",
    readTime: "3 min read",
    author: "Prashanthi Simon",
    colorClass: "bg-[var(--color-brand-rose)]",
    colorKey: "rose",
    excerpt:
      "Many parents feel at a loss when their child is overwhelmed by emotion. Here's a simple framework that helps children name, understand, and manage what they feel.",
    infographicImageUrl: "/infographic-four-ns-big-feelings-parenting-guide.jpg",
    infographicImageAlt: "Anima Space infographic: The Four N's for Big Feelings — a step-by-step parenting guide to Name, Notice, Need, and take the Next small step when children experience strong emotions.",
    sections: [
      {
        paragraphs: [
          "When children are overwhelmed, adults often want to stop the crying, anger, fear, or frustration as quickly as possible. We may say, “Calm down,” “It is not a big deal,” or “There is nothing to be upset about.” These phrases usually come from care, but they can leave a child feeling misunderstood. Before children can manage a strong emotion, they often need help recognising what is happening inside them.",
          "A useful conversation can follow four gentle steps: Name, Notice, Need, Next.",
        ],
      },
      {
        heading: "1. Name the feeling",
        paragraphs: [
          "Begin with an observation rather than an accusation. “Your fists are tight and your voice is loud. I wonder if you are feeling angry.” You can offer a few possibilities without insisting that you are right: “Is it anger, disappointment, or worry?”",
          "Children may not know the exact word. That is okay. Start with basic language such as happy, sad, angry, scared, disappointed, embarrassed, or frustrated. A feelings chart can help, but your tone matters more than the perfect label.",
        ],
      },
      {
        heading: "2. Notice what the feeling is doing",
        paragraphs: [
          "Help the child connect emotion with body sensations, thoughts, and actions. Ask, “Where do you feel it in your body?” or “What happened just before the feeling became bigger?” This teaches the child that emotions have signals and patterns. It also creates a small pause between the feeling and the behaviour.",
          "Keep the conversation short during the peak of a meltdown. A dysregulated child may not be ready for a long explanation. First offer safety, space, water, a slower voice, or a quiet presence. Reflection can happen later, when the child’s body is calmer.",
        ],
      },
      {
        heading: "3. Discover the need",
        paragraphs: [
          "Every feeling carries information, even when the behaviour needs a limit. Anger may point to unfairness or frustration. Sadness may need comfort. Fear may need reassurance and a clear plan. Overwhelm may need fewer words and a break.",
          "Try asking, “What would help your body feel a little safer right now?” The answer may be a hug, quiet time, help with a task, or simply knowing that an adult will stay nearby. If physical aggression or unsafe behaviour occurs, hold the boundary calmly: “I will not let you hit. I will help you be safe.”",
        ],
      },
      {
        heading: "4. Choose the next small step",
        paragraphs: [
          "Do not expect a child to solve the entire problem while upset. Offer two manageable choices: “Would you like to sit here or take three slow breaths with me?” Later, help the child plan what to try next time. Praise the repair as well as the calm: “You were very upset, and you came back to talk. That took courage.”",
          "Children learn emotional regulation through repeated experiences with safe, steady adults. The aim is not to make difficult feelings disappear. It is to show that feelings can be named, listened to, and expressed without harming themselves or others.",
          "If intense emotions are frequent, last a long time, cause significant impairment, or are accompanied by safety concerns, professional support is appropriate. Seeking help is not a sign that a family has failed. It is one way of giving a child more tools and giving caregivers more support.",
        ],
      },
    ],
    reflectionQuote:
      "Connection comes before correction. When a child feels understood, learning becomes easier.",
    infographic: {
      title: "The Four N's for Big Feelings",
      summary: "Name → Notice → Need → Next",
      steps: [
        {
          stepNumber: "01",
          title: "1. Name",
          description:
            "Put gentle words to the emotion: 'I wonder if you are feeling angry, sad, scared, or disappointed.'",
        },
        {
          stepNumber: "02",
          title: "2. Notice",
          description:
            "Identify body sensations (tight chest, clenched fists, stomach) and what triggered the surge.",
        },
        {
          stepNumber: "03",
          title: "3. Need",
          description:
            "Explore the underlying need: comfort, quiet time, help, reassurance, or a safe and steady limit.",
        },
        {
          stepNumber: "04",
          title: "4. Next",
          description:
            "Choose one small safe step together: deep breaths, a sip of water, or a quiet pause before re-engaging.",
        },
      ],
      altText:
        "Infographic showing a four-step way for parents to support a child with strong emotions: name the feeling, notice body signals, identify the need, and choose one small safe next step.",
    },
    editorialNote:
      "These articles are educational resources, not diagnoses or a substitute for professional care. If intense emotions are causing significant distress for your child or family, Anima Space is here to support you.",
  },
];
