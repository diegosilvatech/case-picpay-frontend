type OptionsProps = {
  localeMatcher?: 'best fit' | 'lookup';
  weekday?: 'long' | 'short' | 'narrow';
  era?: 'long' | 'short' | 'narrow';
  year?: 'numeric' | '2-digit';
  month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
  day?: 'numeric' | '2-digit';
  hour?: 'numeric' | '2-digit';
  minute?: 'numeric' | '2-digit';
  second?: 'numeric' | '2-digit';
  timeZoneName?: 'long' | 'short';
  formatMatcher?: 'best fit' | 'basic';
  hour12?: boolean;
  timeZone?: string;
};

export const formatDate = (date: string) => {
  const options: OptionsProps = {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  };
  return new Date(date).toLocaleDateString('pt-BR', options);
};

export const getHourFromDate = (date: string) => {
  const options: OptionsProps = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  };
  return new Date(date).toLocaleDateString('pt-BR', options).substring(11);
};

export const getCurrentDate = () => {
  return new Date().toISOString().split('T')[0];
};
