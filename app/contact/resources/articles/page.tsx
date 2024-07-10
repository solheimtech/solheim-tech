"use client"

import { useState, useMemo } from "react"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem } from "@/app/components/ui/dropdown-menu"
import Link from "next/link"
import Image from "next/image"
import { PlaceholdersAndVanishInput } from "../../../components/ui/placeholder-input";
import placeholderImage from "@/public/assets/images/City-at-Dusk-BW.jpg"
import Tilt from 'react-parallax-tilt';

function PlaceholdersAndVanishInputDemo() {
  const placeholders = useMemo(() => [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ], []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
  );
}

export default function Component() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedAuthor, setSelectedAuthor] = useState("all")
  const [selectedDate, setSelectedDate] = useState("all")
  const blogPosts = useMemo(() => [
    {
      id: 1,
      title: "The Future of Web Development",
      link: "/",
      excerpt: "Explore the latest trends and technologies shaping the future of web development.",
      author: "John Doe",
      category: "Technology",
      date: "2023-06-15",
      thumbnail: placeholderImage,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl. Sed euismod, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.",
    },
    {
      id: 2,
      title: "Mastering React Hooks",
      link: "/",
      excerpt: "Dive deep into the power of React Hooks and learn how to use them effectively in your projects.",
      author: "Jane Smith",
      category: "Programming",
      date: "2023-07-01",
      thumbnail: placeholderImage,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl. Sed euismod, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.",
    },
    {
      id: 3,
      title: "The Art of Minimalist Design",
      link: "/",
      excerpt: "Explore the principles of minimalist design and how to apply them to your web projects.",
      author: "Sarah Lee",
      category: "Design",
      date: "2023-08-10",
      thumbnail: placeholderImage,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl. Sed euismod, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.",
    },
    {
      id: 4,
      title: "Optimizing Website Performance",
      link: "/",
      excerpt: "Learn proven techniques to improve the speed and performance of your website.",
      author: "Michael Johnson",
      category: "Technology",
      date: "2023-09-01",
      thumbnail: placeholderImage,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl. Sed euismod, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget aliquam nisl nisl eget nisl.",
    },
  ], []);
  
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const categoryMatch = selectedCategory === "all" || post.category === selectedCategory
      const authorMatch = selectedAuthor === "all" || post.author === selectedAuthor
      const dateMatch = selectedDate === "all" || post.date.startsWith(selectedDate)
      const searchMatch =
        searchTerm === "" ||
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      return categoryMatch && authorMatch && dateMatch && searchMatch
    })
  }, [searchTerm, selectedCategory, selectedAuthor, selectedDate, blogPosts])
  return (
    <div className="flex flex-col min-h-screen items-center">
      <h1 className="text-center text-[2.5rem] sm:text-[5rem] font-bold mt-8 mb-4 text-white">Articles</h1>
      <header className="text-primary-foreground py-4 px-6 flex justify-center w-full">
        <div className="container mx-auto flex items-center justify-center">
          <div className="flex items-center gap-4 w-full justify-center">
            <div className="relative w-full max-w-2xl flex justify-start"> {/* Changed justify-center to justify-start */}
              <PlaceholdersAndVanishInputDemo/> {/* Added className to make it full width */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2 border border-gray-300 rounded px-2 py-1 text-sm ml-4">
                    <FilterIcon className="h-4 w-4" />
                    <span>Filter</span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64">
                  <DropdownMenuLabel>Filter by:</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem
                    checked={selectedCategory === "all"}
                    onCheckedChange={(checked) => setSelectedCategory(checked ? "all" : "")}
                  >
                    All Categories
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={selectedCategory === "Technology"}
                    onCheckedChange={(checked) => setSelectedCategory(checked ? "Technology" : "")}
                  >
                    Technology
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={selectedCategory === "Programming"}
                    onCheckedChange={(checked) => setSelectedCategory(checked ? "Programming" : "")}
                  >
                    Programming
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={selectedCategory === "Design"}
                    onCheckedChange={(checked) => setSelectedCategory(checked ? "Design" : "")}
                  >
                    Design
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem
                    checked={selectedAuthor === "all"}
                    onCheckedChange={(checked) => setSelectedAuthor(checked ? "all" : "")}
                  >
                    All Authors
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={selectedAuthor === "John Doe"}
                    onCheckedChange={(checked) => setSelectedAuthor(checked ? "John Doe" : "")}
                  >
                    John Doe
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={selectedAuthor === "Jane Smith"}
                    onCheckedChange={(checked) => setSelectedAuthor(checked ? "Jane Smith" : "")}
                  >
                    Jane Smith
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={selectedAuthor === "Sarah Lee"}
                    onCheckedChange={(checked) => setSelectedAuthor(checked ? "Sarah Lee" : "")}
                  >
                    Sarah Lee
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={selectedAuthor === "Michael Johnson"}
                    onCheckedChange={(checked) => setSelectedAuthor(checked ? "Michael Johnson" : "")}
                  >
                    Michael Johnson
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem
                    checked={selectedDate === "all"}
                    onCheckedChange={(checked) => setSelectedDate(checked ? "all" : "")}
                  >
                    All Dates
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={selectedDate === "2023"}
                    onCheckedChange={(checked) => setSelectedDate(checked ? "2023" : "")}
                  >
                    2023
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={selectedDate === "2022"}
                    onCheckedChange={(checked) => setSelectedDate(checked ? "2022" : "")}
                  >
                    2022
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={selectedDate === "2021"}
                    onCheckedChange={(checked) => setSelectedDate(checked ? "2021" : "")}
                  >
                    2021
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 py-8 px-6 w-full">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Tilt key={post.id} className="block bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <Link
                href={post.link}
                prefetch={false}
              >
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  width={400}
                  height={225}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{post.author}</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span>{post.category}</span>
                  </div>
                </div>
              </Link>
            </Tilt>
          ))}
        </div>
      </main>
    </div>
  )
}

function FilterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}