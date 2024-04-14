import React from 'react';
import ClientOnly from '@/app/components/ClientOnly';
import Map from '../components/Map';

const MapViewPage: React.FC = () => {
  return (
    <ClientOnly>
      <Map/>
    </ClientOnly>
  );
};

export default MapViewPage;