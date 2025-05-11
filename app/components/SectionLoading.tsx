import type { SectionLoading } from '~/utils/types';
import GridLayout from '~/components/GridLayout';

export default function SectionLoading(props: SectionLoading) {
  const { className } = props;
  return (
    <GridLayout className={className}>
      {Array.from(Array(12).keys()).map((index: any) => (
        <div className="animate-pulse w-full h-full" key={index}>
          <div className="rounded-20 bg-dark-secondary p-15">
            <div className="relative z-0 aspect-[2/3] rounded-10 overflow-hidden bg-dark-primary" />
            <div className="bg-dark-primary h-[26.25px] rounded col-span-2 mt-10" />
            <div className="bg-dark-primary h-[17.5px] rounded col-span-2 mt-5" />
          </div>
        </div>
      ))}
    </GridLayout>
  );
}
