import { FunctionComponent } from 'react';

const ChevronIcon: FunctionComponent<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='3'
      {...props}
    >
      <path d='m8 4 8 8-8 8' />
    </svg>
  );
};

export default ChevronIcon;
