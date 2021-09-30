import Image from "next/dist/client/image";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function SpeakerCard() {
    return (
        <section className="h-80 w-52 bg-[#321051] flex flex-col items-center justify-center border-2 border-[#42255D] mb-10 rounded-xl text-gray-200">
            {/* Image */}
            <div className="flex justify-center">    
                <Image
                    src={"/my-picture-1.jpg"}
                    alt="ramakrishna"
                    height={100}
                    width={100}
                    className="mt-2 rounded-xl"
                />
            </div>
            {/* Name and About */}
            <div className="flex flex-col items-center">
                <h1 className="text-2xl font-semibold">Ramakrishna</h1>
                <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore provident, illum deleniti quas, ad earum voluptas laboriosam officiis quasi et
                </p>
            </div>
            {/* socials */}
            <section className="flex items-center">
                <div>
                    <InstagramIcon />
                </div>
                <div>
                    <TwitterIcon />
                </div>
                <div>
                    <LinkedInIcon />
                </div>
            </section>
        </section>
    )
}

export default SpeakerCard;
