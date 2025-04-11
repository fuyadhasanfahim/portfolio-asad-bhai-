import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';

const posts = [
    {
        id: 'services-1',
        title: 'eCommerce Photo Editing Service',
        url: 'e-commerce-photo-editing-service',
        image: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg',
    },
    {
        id: 'services-2',
        title: 'Clipping Path Service',
        url: 'clipping-path-service',
        image: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg',
    },
    {
        id: 'services-3',
        title: 'Image Masking Service',
        url: 'image-masking-service',
        image: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg',
    },
    {
        id: 'services-4',
        title: 'Shadow Creation Service',
        url: 'shadow-creation-service',
        image: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg',
    },
    {
        id: 'services-5',
        title: 'Photo Retouching Service',
        url: 'photo-retouching-service',
        image: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg',
    },
    {
        id: 'services-6',
        title: 'Ghost Mannequin Service',
        url: 'ghost-mannequin-service',
        image: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg',
    },
    {
        id: 'services-7',
        title: 'Color Correction Service',
        url: 'color-correction-service',
        image: 'https://shadcnblocks.com/images/block/placeholder-dark-1.svg',
    },
];

export default function Services() {
    return (
        <section className="padding-x padding-y" id="services">
            <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
                <div className="text-center">
                    <Badge variant="secondary" className="mb-6">
                        Latest Updates
                    </Badge>
                    <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl font-amulya">
                        Photo editing services
                    </h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {posts.map((post) => (
                        <Card key={post.id} id={post.url}>
                            <CardHeader>
                                <figure className="relative transition-opacity duration-200 fade-in hover:opacity-70 aspect-video">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        width={400}
                                        height={300}
                                        className="rounded-md"
                                    />
                                </figure>
                            </CardHeader>
                            <CardContent>
                                <h3 className="text-lg text-center font-semibold md:text-xl">
                                    {post.title}
                                </h3>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
