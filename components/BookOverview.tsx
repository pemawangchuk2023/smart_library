import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import BookCover from './BookCover';

const BookOverview = ({
  title,
  author,
  genre,
  rating,
  total_copies,
  available_copies,
  description,
  color,
  cover,
}: Book) => {
  return (
    <section className='book-overview flex flex-col gap-8 md:flex-row md:gap-16'>
      {/* Left: Book Details */}
      <div className='flex-1 flex flex-col gap-5'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <div className='book-info'>
          <p>
            By <span className='font-semibold text-light-200'>{author}</span>
          </p>
          <p>
            Category{' '}
            <span className='font-semibold text-light-200'>{genre}</span>
          </p>
          <div className='flex items-center gap-2'>
            <Image
              src='/icons/star.svg'
              alt='star'
              width={22}
              height={22}
            />
            <p>{rating}</p>
          </div>
        </div>
        <div className='book-copies'>
          <p>
            Total Books: <span>{total_copies}</span>
          </p>
          <p>
            Available Books <span>{available_copies}</span>
          </p>
          <p className='text-gray-600'>{description}</p>
          <Button className='mt-4 flex items-center gap-2 px-4 py-2 bg-primary text-white'>
            <Image
              src='/icons/book.svg'
              alt='book'
              width={20}
              height={20}
            />
            <span className='font-bebas-neue text-xl'>Borrow</span>
          </Button>
        </div>
      </div>

      {/* Right: Book Cover */}
      <div className='relative flex flex-1 justify-center'>
        <div className='relative'>
          <BookCover
            variant='wide'
            className='z-10'
            coverColor={color}
            coverImage={cover}
          />
          <div className='absolute left-16 top-10 rotate-12 opacity-40 hidden sm:block'>
            <BookCover
              variant='wide'
              coverColor={color}
              coverImage={cover}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookOverview;
