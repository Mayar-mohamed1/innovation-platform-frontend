export interface ItemCard {
  id: number;
  titleKey: string;
  descKey: string;
  tagKey: string;
  badgeClass: string;
}

export const FEATURED_INNOVATIONS: ItemCard[] = [
  {
    id: 1,
    titleKey: 'innovations.palmRoofing',
    descKey: 'innovations.palmRoofingDesc',
    tagKey: 'innovations.tagProduct',
    badgeClass: 'badge-product'
  },
  {
    id: 2,
    titleKey: 'innovations.solarIrrigation',
    descKey: 'innovations.solarIrrigationDesc',
    tagKey: 'innovations.tagPractical',
    badgeClass: 'badge-practical'
  }
];

export const FEATURED_CHALLENGES: ItemCard[] = [
  {
    id: 1,
    titleKey: 'challenges.coolingChallenge',
    descKey: 'challenges.coolingChallengeDesc',
    tagKey: 'challenges.tagAgri',
    badgeClass: 'badge-agri'
  },
  {
    id: 2,
    titleKey: 'challenges.caneWaterChallenge',
    descKey: 'challenges.caneWaterChallengeDesc',
    tagKey: 'challenges.tagCane',
    badgeClass: 'badge-cane'
  }
];
