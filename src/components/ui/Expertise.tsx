import Image from "next/image";
import Container from "@/utils/Container";
import { TSingleSkillData } from "@/types/types";

const Expertise = async () => {
  const res = await fetch(process.env.SKILLS_URL as string, {
    cache: "no-store",
  });
  const skillsData = await res.json();

  return (
    <Container>
      <div className="flex flex-wrap justify-evenly pt-4 pb-36 my-4 gap-4">
        {skillsData &&
          skillsData.map((singleSkillData: TSingleSkillData, index: number) => (
            <div key={index}>
              <Image
                src={singleSkillData.imageUrl}
                alt={singleSkillData.title}
                width={200}
                height={200}
                className="w-12 h-12 object-cover hover:scale-125 smooth_transition"
              />
            </div>
          ))}
      </div>
    </Container>
  );
};

export default Expertise;
