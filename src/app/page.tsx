import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FloatingCubes } from '@/components/ui/floating-cubes';
import { Droplets, Leaf, Shield, MapPin, Phone, Mail } from 'lucide-react';

const products = [
  {
    title: 'AquaFlow Faucet',
    description: 'Smart faucet with touchless operation and water-saving technology.',
    image: 'https://placehold.co/600x400',
    hint: 'faucet sink',
    gridClass: 'md:col-span-1 lg:col-span-2'
  },
  {
    title: 'Zenith Shower System',
    description: 'A luxurious shower experience with multiple spray patterns.',
    image: 'https://placehold.co/600x400',
    hint: 'shower head',
    gridClass: ''
  },
  {
    title: 'SereneClean Bidet Toilet',
    description: 'The pinnacle of hygiene and comfort in your bathroom.',
    image: 'https://placehold.co/600x400',
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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center text-center overflow-hidden">
            <FloatingCubes />
            <div className="relative z-10 p-4 animate-in fade-in slide-in-from-bottom-12 duration-1000">
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

        <section id="about" className="py-20 lg:py-32">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="animate-in fade-in slide-in-from-left-12 duration-1000">
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">Redefining Cleanliness</h2>
                        <p className="mt-4 text-muted-foreground text-lg">
                            At Hygiene Horizon, we believe that sanitary ware should be more than just functional. It should be a blend of art, technology, and sustainability. Our mission is to create products that not only enhance your space but also contribute to a healthier planet.
                        </p>
                        <div className="mt-8 space-y-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                                    <div>
                                        <h3 className="font-bold text-lg text-foreground">{feature.title}</h3>
                                        <p className="text-muted-foreground">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative h-80 md:h-full w-full animate-in fade-in slide-in-from-right-12 duration-1000 min-h-[300px]">
                         <Image
                            src="https://placehold.co/800x600"
                            alt="Modern bathroom showcase"
                            fill
                            className="object-cover rounded-xl shadow-lg"
                            data-ai-hint="modern bathroom"
                        />
                    </div>
                </div>
            </div>
        </section>
        
        <section id="products" className="py-20 lg:py-32 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 animate-in fade-in duration-500">
                     <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">Our Product Range</h2>
                     <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">Discover our collection of beautifully designed and masterfully engineered sanitary ware.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <Card key={index} className={`overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 duration-1000 ${product.gridClass}`} style={{animationDelay: `${index * 100}ms`}}>
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

        <section id="contact" className="py-20 lg:py-32">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 animate-in fade-in duration-500">
                     <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">Get in Touch</h2>
                     <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">We're here to help. Reach out to us for quotes, support, or any inquiries.</p>
                </div>
                <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
                    <Card className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        <CardHeader className="items-center">
                            <div className="mx-auto bg-accent/10 p-4 rounded-full w-fit">
                                <MapPin className="h-8 w-8 text-accent"/>
                            </div>
                            <CardTitle>Our Office</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">123 Future Street, Innovation City, 45678</p>
                        </CardContent>
                    </Card>
                     <Card className="animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{animationDelay: `150ms`}}>
                        <CardHeader className="items-center">
                            <div className="mx-auto bg-accent/10 p-4 rounded-full w-fit">
                                <Phone className="h-8 w-8 text-accent"/>
                            </div>
                            <CardTitle>Phone</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">(123) 456-7890</p>
                        </CardContent>
                    </Card>
                     <Card className="animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{animationDelay: `300ms`}}>
                        <CardHeader className="items-center">
                            <div className="mx-auto bg-accent/10 p-4 rounded-full w-fit">
                                <Mail className="h-8 w-8 text-accent"/>
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
