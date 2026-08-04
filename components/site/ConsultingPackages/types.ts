export interface PackageFeature {
  title: string;
  included: boolean;
}

export interface ConsultingPackage {
  id: string;
  name: string;
  badge: string;
  description: string;
  idealFor: string;
  icon: string;
  color: string;
  highlight: boolean;
  features: PackageFeature[];
}
