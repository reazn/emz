export const siteUrl = "https://www.emzsalon.co.uk";

export const links: string[] = ["home", "about", "feed", "services", "find us"];

export const details = {
    address: "390 Vicarage Lane\nBlackpool\nFY4 4LP",
    phone: "01253 380711",
    hours: "Tue - Fri  10am - 7pm\nSat  10am - 4pm",
}

export const social = [
    { 
        title: "Phone",
        url: `tel:${details.phone}`,
        icon: "ic:round-local-phone",
    },
    {
        title: "Mail",
        url: "mailto:emily@emzsalon.co.uk?subject=Enquiry",
        icon: "ic:twotone-mail-outline",
    },
    {
        title: "TikTok",
        url: "https://www.tiktok.com/@emilyvictoria93",
        icon: "ic:baseline-tiktok",
    },
    {
        title: "Facebook",
        url: "https://www.facebook.com/EmzSalon",
        icon: "ri:facebook-fill",
    },
    {
        title: "Instagram",
        url: "https://www.instagram.com/emzsalon",
        icon: "mdi:instagram",
    }
] satisfies {[key: string]: string}[];

// TODO - compress images (webp)
export const posts = [
    {
        url: "https://www.instagram.com/p/CjTb1jCrmKH/",
        image: "/images/posts/1.webp",
    },
    {
        url: "https://www.facebook.com/photo.php?fbid=539414658185028",
        image: "/images/posts/2.webp",
    },
    {
        url: "https://www.facebook.com/photo.php?fbid=559212249538602",
        image: "/images/posts/3.webp",
    },
    {
        url: "https://www.facebook.com/photo/?fbid=380022964124199",
        image: "/images/posts/4.webp",
    },
    {
        url: "https://www.facebook.com/photo/?fbid=578746957585131",
        image: "/images/posts/5.webp",
    },
    {
        url: "https://www.facebook.com/photo/?fbid=584319193694574",
        image: "/images/posts/6.webp",
    },
    {
        url: "https://www.facebook.com/photo/?fbid=578746900918470",
        image: "/images/posts/7.webp",
    },
    {
        url: "https://www.facebook.com/photo/?fbid=4366073693509350",
        image: "/images/posts/8.webp",
    },
    {
        url: "https://www.facebook.com/photo/?fbid=4242130305903690",
        image: "/images/posts/9.webp",
    },
    {
        url: "https://www.facebook.com/photo/?fbid=4842524902530891",
        image: "/images/posts/10.webp",
    },
] satisfies {[key: string]: string}[];