// User and Profile Types
export interface UserProfile {
  id: string
  email: string
  role: 'student' | 'parent'
  firstName: string
  lastName: string
  gradeLevel: '9th' | '10th' | '11th' | '12th'
  academicInterests: string[]
  extracurricularInterests: string[]
  targetUniversities: string[] // max 3
  languagePreference: 'en' | 'zh' | 'zh-HK'
  subscriptionTier: 'free' | 'plus' | 'concierge'
  createdAt: Date
  updatedAt: Date
}

// Content Types
export interface ContentItem {
  id: string
  slug: string
  type: 'blueprint' | 'university-hub' | 'guide' | 'blog' | 'case-study'
  tier: 'free' | 'plus' | 'concierge'
  title: string
  description: string
  content: string
  metadata: {
    gradeLevels?: string[]
    universities?: string[]
    tags: string[]
    estimatedReadTime?: number
  }
  publishedAt?: Date
  translations: {
    en: ContentTranslation
    zh?: ContentTranslation
    'zh-HK'?: ContentTranslation
  }
}

export interface ContentTranslation {
  title: string
  description: string
  content: string
}

// Blueprint Types
export interface BlueprintYear {
  year: '9th' | '10th' | '11th' | '12th'
  theme: string
  description: string
  goals: string[]
  checklists: ChecklistCategory[]
}

export interface ChecklistCategory {
  category: 'academics' | 'extracurriculars' | 'testing' | 'summer'
  items: ChecklistItem[]
}

export interface ChecklistItem {
  id: string
  title: string
  description: string
  priority: 'high' | 'medium' | 'low'
  timeframe: string
  resources?: string[]
  completed?: boolean
}

// University Types
export interface University {
  id: string
  name: string
  slug: string
  location: string
  type: 'ivy-league' | 'elite-private' | 'top-public' | 'liberal-arts'
  acceptanceRate: string
  avgSAT: string
  avgGPA: string
  admissionsPhilosophy: string
  idealApplicant: string[]
  culture: string[]
  supplementalEssays: EssayPrompt[]
  notableAlumni: string[]
}

export interface EssayPrompt {
  id: string
  question: string
  wordLimit: number
  tips: string[]
  examples?: string[]
}

// Progress Tracking
export interface UserProgress {
  userId: string
  contentId: string
  progressType: 'checklist' | 'course' | 'reading'
  progressData: {
    completedItems?: string[]
    currentStep?: number
    timeSpent?: number
    lastAccessed?: Date
  }
  completionPercentage: number
  updatedAt: Date
}

// Subscription Types
export interface Subscription {
  id: string
  userId: string
  tier: 'plus' | 'concierge'
  status: 'active' | 'canceled' | 'past_due' | 'trialing'
  stripeCustomerId: string
  stripeSubscriptionId: string
  currentPeriodStart: Date
  currentPeriodEnd: Date
  cancelAtPeriodEnd: boolean
  trialEnd?: Date
}

// Coaching Types
export interface Coach {
  id: string
  name: string
  title: string
  bio: string
  expertise: string[]
  formerInstitutions: string[]
  languages: string[]
  availability: 'available' | 'limited' | 'unavailable'
  rating: number
  reviewCount: number
}

export interface CoachingSession {
  id: string
  userId: string
  coachId: string
  type: 'consultation' | 'essay-review' | 'interview-prep' | 'strategy-session'
  status: 'scheduled' | 'completed' | 'canceled'
  scheduledAt: Date
  duration: number // in minutes
  notes?: string
  feedback?: string
  rating?: number
}

// Essay Review Types
export interface EssaySubmission {
  id: string
  userId: string
  title: string
  type: 'personal-statement' | 'supplemental' | 'scholarship'
  content: string
  wordCount: number
  university?: string
  status: 'submitted' | 'in-review' | 'completed'
  submittedAt: Date
  feedback?: EssayFeedback
}

export interface EssayFeedback {
  overall: string
  strengths: string[]
  improvements: string[]
  suggestions: string[]
  score: number // 1-10
  reviewedBy: string
  reviewedAt: Date
}

// Analytics Types
export interface AnalyticsEvent {
  userId?: string
  event: string
  properties: Record<string, any>
  timestamp: Date
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number
    pageSize: number
    total: number
    totalPages: number
  }
}

// Form Types
export interface OnboardingFormData {
  firstName: string
  lastName: string
  email: string
  role: 'student' | 'parent'
  gradeLevel: '9th' | '10th' | '11th' | '12th'
  academicInterests: string[]
  extracurricularInterests: string[]
  targetUniversities: string[]
  languagePreference: 'en' | 'zh' | 'zh-HK'
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
  type: 'general' | 'support' | 'sales'
}

// Component Props Types
export interface PageProps {
  params: { [key: string]: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export interface LayoutProps {
  children: React.ReactNode
}
