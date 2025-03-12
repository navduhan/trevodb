import HomeLeft from "@/components/home/HomeLeft";
import PageHeader from "@/components/PageHeader/PageHeader";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <PageHeader title="About trevoDB" />
      <div className="w-[90%] md:w-[80%] bg-white p-6 rounded-lg shadow-lg mt-6">
        <div className="text-center mb-6">
       
        
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <HomeLeft />
          <div className="w-full md:w-1/2 flex justify-center">
            <Image src="/images/reo.png" alt="trevoDB" width={500} height={500} className="rounded-lg shadow-md" />
          </div>
        </div>
        <div className="h-1 bg-gray-300 my-6"></div>
        <div className="flex flex-col md:flex-row justify-around items-center mt-6">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 p-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h2 className="text-xl font-bold mb-2">TAXONOMY</h2>
                  <p className="text-gray-700">
                    <a href="https://viralzone.expasy.org/293" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">Group III: dsRNA viruses</a>
                    <br />
                    Family: <i><a href="https://viralzone.expasy.org/104" target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">Spinareoviridae</a></i>
                    <br />
                    Genus: <i><strong>Orthoreovirus</strong></i>
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h2 className="text-xl font-bold mb-2">ETYMOLOGY</h2>
                  <p className="text-gray-700">
                    <strong>Ortho</strong>: from Greek, 'straight'
                    <br />
                    <strong>reovirus</strong>: from <strong>r</strong>espiratory <strong>e</strong>nteric <strong>o</strong>rphan <strong>virus</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Image src="/images/turkey_reovirus_genome_image.png" alt="Genome" width={500} height={500} className="rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </div>
  );
}
