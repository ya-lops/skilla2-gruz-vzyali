// ============ Основные типы ============

export interface BrandDefault {
  name: string;
  inn: string;
  kpp: string;
  logo: string;
  ogrn: string;
  ur_address: string;
  bik: string;
  ks: string;
  bank: string;
  rs: string;
}

export interface SocialLink {
  telegram?: string;    
  instagram?: string;
  youtube?: string; 
  vk?: string;      
  rutube?: string;  
  dzen?: string;    
}

export interface MessengerLink {
  vk?: string;   
  telegram?: string;
  max?: string;
  whatsapp?: string;
}

export interface ReplacementPhone {
  yandex?: string;
  google?: string;
  '2gis'?: string;
}

export interface SiteAction {
  id: number;
  description: string;
  is_active: number;
}

export interface SiteDocument {
  id: number;
  name: string;
  path: string;
  date: string;
  filename: string;
}

export interface BrandMain {
  city_rod: string;
  action_sel: number;
  site_phone: string;
  site_phone2: string;
  site_email: string;
  site_address: string;
  site_work_time: string;
  site_work_time_1: string;
  site_work_time_2: string;
  site_mango_phone: string;
  site_mango_type: string;
  site_buh_time: string;
  adv_price: string;
  adv_price_percent: string;
  site_social_links: SocialLink[];
  site_messenger_links: MessengerLink[];
  site_replacement_phones: ReplacementPhone[];
  site_actions: SiteAction[];
  site_documents: SiteDocument[];
}

// ============ Услуги ============

export interface SubService {
  id: number;
  name: string;
  price: string;
  unit: string | null;
}

export interface Service {
  id: number;
  name: string;
  description: string | null;
  url: string;
  is_active: number;
  services: SubService[];
  order?: any;
}

// ============ Счетчики ============

export interface Counters {
  site_yandex: string;
  site_google: string;
  site_html: string;
  site_html_head: string;
}

// ============ Мета-данные ============

export interface MetaItem {
  id: number;
  url: string;
  title: string;
  description: string;
  keywords: string;
}

// ============ Отзывы ============

export interface Feedback {
  id: number;
  name: string;
  feedback: string;
  avatar: string;
  rating: string;
}

// ============ Партнеры ============

export interface Partners {
  default_logos: string[];
  additional_logos: string[];
  thank_letters: string[];
}

// ============ Вакансии ============

export interface Vacancies {
  vacancy_link: string;
}

// ============ Контент страниц ============

export interface Content {
  id: number;
  url: string;
  content: string;
}

// ============ Статьи ============

export interface Article {
  id: number;
  date_create: string;
  title: string;
  url: string;
  meta_title: string;
  description: string;
  keywords: string;
  content: string;
}

// ============ Новый тип: Города на карте ============

export interface MapCity {
  city: string;
  seo_site: string;
  lat: number;
  lng: number;
}

export interface MapCoordinates {
  city_count: number;
  cities: MapCity[];
}

// ============ Главный тип бренда ============

export interface BrandData {
  default: BrandDefault;
  main: BrandMain;
  services: Service[];
  counters: Counters;
  meta: MetaItem[];
  feedbacks: Feedback[];
  partners: Partners;
  vacancies: Vacancies;
  contents: Content[];
  articles: Article[];
  map_coordinates: MapCoordinates;
}