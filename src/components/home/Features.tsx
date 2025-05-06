
import { Truck, Shield, Percent, Award } from 'lucide-react';

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="flex p-4 rounded-lg bg-gray-50">
      <div className="h-10 w-10 text-brand mr-4 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export function Features() {
  const features = [
    {
      icon: <Truck className="h-10 w-10" />,
      title: "Быстрая доставка",
      description: "Доставим по Москве и области"
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Гарантия качества",
      description: "Только сертифицированные товары"
    },
    {
      icon: <Percent className="h-10 w-10" />,
      title: "Выгодные цены",
      description: "Специальные предложения"
    },
    {
      icon: <Award className="h-10 w-10" />,
      title: "10 лет на рынке",
      description: "Опыт и надежность"
    }
  ];

  return (
    <section className="py-10">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
