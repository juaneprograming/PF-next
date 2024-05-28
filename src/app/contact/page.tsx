import Form from "@/components/Form";
import { MailIcon, HomeIcon, PhoneIcon, EarthIcon } from "lucide-react";


const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* texto y ilustracion */}
        <div className="grid xl:grid-cols-2 pt.12 xl:h-[480px] mb-6 xl:mb-24">
          {/* texto */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Hola,👋🏽
            </div>
            <h1 className="h1 max-w-md mb-8">Vamos a Trabajar Juntos.</h1>
            <p className="subtitle max-w-[400px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, ullam placeat iste reiciendis dignissimos tenetur,
              beatae vero quae atque ex quia amet tempora. Ut porro at
              doloremque ex libero earum!
            </p>
          </div>
          {/* ilustracion */}
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        {/* text de info y formulario */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* info texto */}
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* emial */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>Ojuan2594@gmail.com</div>
            </div>
            <div className="flex items-center gap-x-8">
              {/* ubicacion */}
              <EarthIcon size={18} className="text-primary" />
              <div>Cartagena de Indias</div>
            </div>
            <div className="flex items-center gap-x-8">
              {/* numero */}
              <PhoneIcon size={18} className="text-primary" />
              <div>+57 3017784175</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
