import { Calendar, MapPin, Send, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <img
              src="/logo.png?height=120&width=120"
              alt="ICRTET 2025 Logo"
              className="mx-auto h-37 w-37 mb-6"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ICRTET 2025
            </span>
            <div className="text-lg md:text-xl font-normal text-gray-600 mt-2">
              10th Edition
            </div>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
            International Conference on Recent Trends in Engineering and
            Technology
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
            <div className="flex items-center space-x-2 text-gray-600">
              <Calendar className="h-5 w-5" />
              <span className="font-medium">19–20 December 2025</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">DYPCET, Kolhapur</span>
            </div>
          </div>
             <marquee className="p-2" behavior="scroll" direction="left">
  <div className="text-black text-lg">
    <span className="font-bold text-xl text-blue-600">“</span>
    The Microsoft CMT service was used for managing the peer-reviewing
    process for this conference. This service was provided for free by
    Microsoft and they bore all expenses, including costs for Azure
    cloud services as well as for software development and support.
    <span className="font-bold text-xl text-blue-600">”</span>
  </div>
</marquee>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Organized by D. Y. Patil College of Engineering & Technology,
            Kolhapur
            <br />
            <span className="font-semibold">
              In collaboration with AICTE and Elsevier
            </span>
          </p>
      
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={"submit-paper"}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Send className="mr-2 h-4 w-4" />
                Submit Paper
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download Brochure
            </Button>
          </div>
          <div className="mt-12">
            <img
              src="/placeholder.svg?height=100&width=100"
              alt="Registration QR Code"
              className="mx-auto h-24 w-24"
            />
            <p className="text-sm text-gray-500 mt-2">
              Scan for Quick Registration
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
