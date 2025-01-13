'use client';
import { AlertCircle, Gauge } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TooFast = () => {
  return (
    <main className='root-container relative min-h-screen flex flex-col items-center justify-center p-4'>
      <div className='relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-8'>
        <div className='absolute inset-0'>
          <Gauge
            className='w-full h-full text-primary/80 animate-pulse'
            strokeWidth={1.5}
          />
        </div>
        <div className='absolute inset-0 flex items-center justify-center'>
          <AlertCircle className='w-12 h-12 md:w-16 md:h-16 text-destructive' />
        </div>
      </div>
      <h1 className='font-bebas-neue text-4xl sm:text-6xl md:text-7xl font-bold text-foreground text-center mb-6'>
        Whoa, Slow Down There, Speedy!
      </h1>
      <p className='text-2xl md:text-2xl text-justify text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed'>
        We noticed some unusually fast activity from your account. Please wait a
        moment before trying again.
      </p>
      <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-8'>
        <Button
          variant='default'
          onClick={() => window.location.reload()}
          className='min-w-[160px] h-12 text-lg'
          size='lg'
        >
          Try Again
        </Button>
        <Button
          variant='outline'
          onClick={() => window.history.back()}
          className='min-w-[160px] h-12 text-lg'
          size='lg'
        >
          Go Back
        </Button>
      </div>
      <p className='text-base md:text-lg text-center text-muted-foreground/80'>
        You can try again in a few seconds
      </p>
    </main>
  );
};

export default TooFast;
