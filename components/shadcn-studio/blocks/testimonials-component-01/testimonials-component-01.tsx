"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Rating } from "@/components/ui/rating";

export type TestimonialItem = {
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
};

type TestimonialsComponentProps = {
  testimonials: TestimonialItem[];
};

const TestimonialsComponent = ({ testimonials }: TestimonialsComponentProps) => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[var(--color-brand-off-white)]">
      <Carousel
        autoplay={true}
        className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
        opts={{
          align: "start",
          slidesToScroll: 1,
          loop: true,
        }}
      >
        {/* Left Content Column */}
        <div className="lg:col-span-4 flex flex-col items-start gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-brand-mauve)]">
            Verified Reviews
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-brand-navy)] leading-tight">
            Words from Parents
          </h2>

          <p className="text-[var(--color-brand-espresso)] text-base sm:text-lg leading-relaxed">
            Real experiences from families who found peace, emotional resilience, and growth with Prashanthi Simon.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <CarouselPrevious
              size="icon"
              className="w-10 h-10 rounded-lg bg-gray-200/70 hover:bg-gray-300/80 text-[var(--color-brand-navy)] border-0 transition-colors flex items-center justify-center shadow-none static translate-y-0"
            />
            <CarouselNext
              size="icon"
              className="w-10 h-10 rounded-lg bg-[var(--color-brand-navy)] hover:bg-[var(--color-brand-navy)]/90 text-white border-0 transition-colors flex items-center justify-center shadow-none static translate-y-0"
            />
          </div>
        </div>

        {/* Right Testimonial Carousel Column */}
        <div className="lg:col-span-8 w-full overflow-hidden">
          <CarouselContent className="-ml-4 sm:-ml-6">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 sm:pl-6 md:basis-1/2">
                <Card className="h-full bg-white rounded-2xl p-6 border border-gray-200/70 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
                  <div>
                    {/* Author Header */}
                    <CardHeader className="p-0 flex flex-row items-center gap-3 space-y-0 mb-4">
                      <Avatar className="w-11 h-11 rounded-full border border-gray-100">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback className="bg-[var(--color-brand-sky)]/40 text-[var(--color-brand-navy)] font-bold text-xs">
                          {testimonial.name
                            .split(" ", 2)
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex flex-col">
                        <h4 className="font-heading text-base font-bold text-[var(--color-brand-navy)] leading-snug">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-gray-500 font-medium">
                          {testimonial.role}{" "}
                          {testimonial.company && (
                            <span className="text-[var(--color-brand-navy)] font-semibold">
                              at {testimonial.company}
                            </span>
                          )}
                        </p>
                      </div>
                    </CardHeader>

                    {/* Star Rating */}
                    <div className="mb-3">
                      <Rating
                        readOnly
                        variant="yellow"
                        size={18}
                        value={testimonial.rating}
                        precision={0.5}
                      />
                    </div>

                    {/* Review Text */}
                    <CardContent className="p-0">
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                        &quot;{testimonial.content}&quot;
                      </p>
                    </CardContent>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
    </section>
  );
};

export default TestimonialsComponent;
