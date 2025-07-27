
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FloatingCubes } from '@/components/ui/floating-cubes';
import { Droplets, Leaf, Shield, MapPin, Phone, Mail, Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const products = [
  {
    title: 'AquaFlow Faucet',
    description: 'Smart faucet with touchless operation and water-saving technology.',
    image: 'https://images.unsplash.com/photo-1613849925594-415a32298f54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxN3x8YSUyMGJhdGhyb29tJTIwd2l0aCUyMHR1YnxlbnwwfHx8fDE3NTM2MjM2NDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    hint: 'faucet sink',
    gridClass: 'md:col-span-1 lg:col-span-2'
  },
  {
    title: 'Zenith Shower System',
    description: 'A luxurious shower experience with multiple spray patterns.',
    image: 'https://images.unsplash.com/photo-1609280069904-ab36feb3f20c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyMHx8c2hvd2VyJTIwfGVufDB8fHx8MTc1MzYyMzczNXww&ixlib=rb-4.1.0&q=80&w=1080',
    hint: 'shower head',
    gridClass: ''
  },
  {
    title: 'SereneClean Bidet Toilet',
    description: 'The pinnacle of hygiene and comfort in your bathroom.',
    image: 'https://images.unsplash.com/photo-1593817122715-bbe051a66bf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8bW9kZXJuJTIwc2FuaXRhcnl8ZW58MHx8fHwxNzUzNjIzODQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    hint: 'modern toilet',
    gridClass: ''
  },
  {
    title: 'HorizonVessel Sink',
    description: 'A sleek, modern vessel sink that complements any decor.',
    image: 'https://placehold.co/600x400',
    hint: 'vessel sink',
    gridClass: 'md:col-span-1 lg:col-span-2'
  },
  {
    title: 'EcoFlush Toilet',
    description: 'High-efficiency toilet that saves water without sacrificing performance.',
    image: 'https://placehold.co/600x400',
    hint: 'toilet bathroom',
    gridClass: ''
  }
];

const features = [
    {
        icon: <Droplets className="h-10 w-10 text-primary" />,
        title: "Water-Saving",
        description: "Our products are engineered to reduce water consumption, saving you money and protecting the planet."
    },
    {
        icon: <Leaf className="h-10 w-10 text-primary" />,
        title: "Eco-Friendly Materials",
        description: "We use sustainable and durable materials to create products that last and minimize environmental impact."
    },
    {
        icon: <Shield className="h-10 w-10 text-primary" />,
        title: "Unmatched Durability",
        description: "Built to withstand the test of time, ensuring long-lasting performance and reliability."
    }
];

const testimonials = [
    {
        name: "Sarah L.",
        role: "Homeowner",
        avatar: "https://placehold.co/100x100",
        hint: 'woman portrait',
        rating: 5,
        quote: "The AquaFlow faucet is a game-changer! It's stylish, functional, and I've already noticed a difference in my water bill. Installation was a breeze too."
    },
    {
        name: "Mark T.",
        role: "Interior Designer",
        avatar: "https://placehold.co/100x100",
        hint: 'man portrait',
        rating: 5,
        quote: "I specify Hygiene Horizon products for all my high-end bathroom projects. The quality is exceptional and my clients are always thrilled with the futuristic aesthetic."
    },
    {
        name: "Emily R.",
        role: "Hotel Manager",
        avatar: "https://placehold.co/100x100",
        hint: 'woman professional',
        rating: 5,
        quote: "We recently upgraded our hotel bathrooms with the Zenith shower systems. Our guests have been raving about the luxurious experience. A fantastic investment!"
    },
    {
        name: "David Chen",
        role: "Contractor",
        avatar: "https://placehold.co/100x100",
        hint: 'professional man',
        rating: 4,
        quote: "Solid products, easy to install. The SereneClean bidet toilet is particularly popular with my clients. Great customer support from the Hygiene Horizon team."
    }
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background scroll-smooth" style={{ perspective: '1000px' }}>
      <Header />
      <main className="flex-grow">
        <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center text-center overflow-hidden">
            <FloatingCubes />
            <div className="relative z-10 p-4 animate-float-in">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-foreground">
                    The Future of Hygiene is <span className="text-primary">Here</span>.
                </h1>
                <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
                    Innovative and sustainable sanitary solutions for modern living. Welcome to a new era of cleanliness and design.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Button asChild size="lg">
                        <Link href="#products">Explore Products</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                        <Link href="#contact">Contact Us</Link>
                    </Button>
                </div>
            </div>
        </section>

        <section id="about" className="py-20 lg:py-32 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="animate-float-in-left">
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">Redefining Cleanliness</h2>
                        <p className="mt-4 text-muted-foreground text-lg">
                            At Hygiene Horizon, we believe that sanitary ware should be more than just functional. It should be a blend of art, technology, and sustainability. Our mission is to create products that not only enhance your space but also contribute to a healthier planet.
                        </p>
                        <div className="mt-8 space-y-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-4 animate-float-in" style={{ animationDelay: `${index * 150}ms` }}>
                                    <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                                    <div>
                                        <h3 className="font-bold text-lg text-foreground">{feature.title}</h3>
                                        <p className="text-muted-foreground">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative h-80 md:h-full w-full animate-float-in-right min-h-[300px]">
                         <Image
                            src="https://www.wholesaledomestic.com/product_images/uploaded_images/summer-roomset-4-closeup-2.jpg"
                            alt="Modern bathroom showcase"
                            fill
                            className="object-cover rounded-xl shadow-lg"
                            data-ai-hint="modern bathroom"
                        />
                    </div>
                </div>
            </div>
        </section>
        
        <section id="products" className="py-20 lg:py-32 bg-secondary overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 animate-float-in">
                     <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">Our Product Range</h2>
                     <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">Discover our collection of beautifully designed and masterfully engineered sanitary ware.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <Card key={index} className={`overflow-hidden transition-all duration-500 hover:shadow-2xl hover:!scale-105 animate-float-in ${product.gridClass}`} style={{animationDelay: `${index * 150}ms`}}>
                            <CardHeader className="p-0">
                                <div className="relative h-60 w-full">
                                    <Image src={product.image} alt={product.title} fill className="object-cover" data-ai-hint={product.hint} />
                                </div>
                            </CardHeader>
                            <CardContent className="p-6">
                                <CardTitle className="text-xl">{product.title}</CardTitle>
                                <CardDescription className="mt-2">{product.description}</CardDescription>
                                <Button variant="link" className="p-0 mt-4 text-primary">Learn More &rarr;</Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <section id="testimonials" className="py-20 lg:py-32 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 animate-float-in">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">What Our Clients Say</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">We take pride in our happy customers. Here's what they have to say about their experience with Hygiene Horizon.</p>
                </div>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full max-w-5xl mx-auto animate-float-in-slow"
                >
                    <CarouselContent>
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1 h-full">
                                    <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                        <CardHeader className="flex flex-row items-center gap-4 pb-4">
                                             <Avatar>
                                                <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <CardTitle className="text-base">{testimonial.name}</CardTitle>
                                                <CardDescription>{testimonial.role}</CardDescription>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="flex-grow">
                                            <div className="flex gap-0.5 mb-2">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`} />
                                                ))}
                                            </div>
                                            <p className="text-sm text-muted-foreground">"{testimonial.quote}"</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>


        <section id="contact" className="py-20 lg:py-32 bg-secondary overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 animate-float-in">
                     <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">Get in Touch</h2>
                     <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">We're here to help. Reach out to us for quotes, support, or any inquiries.</p>
                </div>
                <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
                    <Card className="animate-float-in bg-background" style={{animationDelay: `0ms`}}>
                        <CardHeader className="items-center">
                            <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                                <MapPin className="h-8 w-8 text-primary"/>
                            </div>
                            <CardTitle>Our Office</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">123 Future Street, Innovation City, 45678</p>
                        </CardContent>
                    </Card>
                     <Card className="animate-float-in bg-background" style={{animationDelay: `150ms`}}>
                        <CardHeader className="items-center">
                            <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                                <Phone className="h-8 w-8 text-primary"/>
                            </div>
                            <CardTitle>Phone</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">(123) 456-7890</p>
                        </CardContent>
                    </Card>
                     <Card className="animate-float-in bg-background" style={{animationDelay: `300ms`}}>
                        <CardHeader className="items-center">
                            <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                                <Mail className="h-8 w-8 text-primary"/>
                            </div>
                            <CardTitle>Email</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">contact@hygienehorizon.com</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
