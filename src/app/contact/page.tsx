import { MailIcon, HomeIcon, PhoneIcon } from "lucide-react";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* texto y ilustracion */}
        <div>
          {/* texto */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Holaaaaaaaaaaaaaaa,👋🏽
            </div>
            <h1 className="h1">Vamos a Trabajar Juntos</h1>
          </div>
        </div>
        {/*  */}
        <div>Texto y formulario</div>
      </div>
    </section>
  );
};

export default Contact;
