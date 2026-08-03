/**
 * Рассчитывает цену со скидкой
 */
export function getDiscountedPrice(price: string | number, discountPercent: number): string {
  const numPrice = typeof price === 'string' ? parseFloat(price) : price;
  
  if (discountPercent > 0 && discountPercent <= 100) {
    return (numPrice - (numPrice * discountPercent) / 100).toFixed(0);
  }
  
  return String(numPrice);
}

/**
 * Возвращает процент скидки из данных бренда
 */
export function getDiscountPercent(discountValue: string | number): number {
  return Number(discountValue) || 0;
}

/**
 * Проверяет, есть ли активная скидка
 */
export function hasDiscount(discountPercent: number): boolean {
  return discountPercent > 0;
}

// ============ Работа с услугами ============

export interface SubService {
  price: string;
  unit: string;
  name: string;
}

export interface ServiceWithSubServices {
  is_active: number;
  services: SubService[];
}

/**
 * Находит подуслугу с минимальной ценой в рамках одной услуги
 */
export function getMinPriceService<T extends SubService>(subServices: T[]): T {
  return subServices.reduce((min, current) =>
    parseFloat(current.price) < parseFloat(min.price) ? current : min
  );
}

/**
 * Возвращает минимальную цену среди всех активных услуг
 */
export function getGlobalMinPrice(services: ServiceWithSubServices[]): number {
  const activeServices = services.filter(s => s.is_active === 1 && s.services.length > 0);

  if (activeServices.length === 0) return 0;

  const minPrices = activeServices.map(service => {
    const minService = getMinPriceService(service.services);
    return parseFloat(minService.price);
  });

  return Math.min(...minPrices);
}

/**
 * Возвращает минимальную цену с учётом скидки
 */
export function getGlobalMinPriceWithDiscount(
  services: ServiceWithSubServices[],
  discountPercent: number
): {
  price: number;
  discountedPrice: number;
  showDiscount: boolean;
} {
  const price = getGlobalMinPrice(services);
  const showDiscount = hasDiscount(discountPercent);
  const discountedPrice = showDiscount
    ? parseFloat(getDiscountedPrice(price, discountPercent))
    : price;

  return { price, discountedPrice, showDiscount };
}