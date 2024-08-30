import { FunctionComponent } from "react";
import { titleH4 } from "../../tools/tailwind";
import whyus1 from "../../assets/images/whyus1.png"
import whyus2 from "../../assets/images/whyus2.png"
import whyus3 from "../../assets/images/whyus3.png"
import { WhyUsCard } from "./why-us-card";

export const WhyUs: FunctionComponent = () => {
    return (
        <section className="mt-28">
            <h4 className={`${titleH4} mb-8`}>
                <span>ce qui nous </span>
                <span className="text-primary">différencie.</span>
            </h4>
            <div className="flex flex-wrap items-center justify-around">
              <WhyUsCard title="prelèvement 3%" picture={whyus1} description="Lorem ipsum dolor sit amet conse adipisicing elit. Accusantium dolore autem asperiores similique vero enim non delectus exercitationem quisquam fugiat soluta molestiae dignissimos amet, dolorum error?" />
              <WhyUsCard title="Jeu transparent" picture={whyus2} description="Lorem ipsum dolor sit amet conse adipisicing elit. Accusantium dolore autem asperiores similique vero enim non delectus exercitationem quisquam fugiat soluta molestiae dignissimos amet, dolorum error?" />
              <WhyUsCard title="depôt & retrait" picture={whyus3} description="Lorem ipsum dolor sit amet conse adipisicing elit. Accusantium dolore autem asperiores similique vero enim non delectus exercitationem quisquam fugiat soluta molestiae dignissimos amet, dolorum error?" />
            </div>
        </section>
    )
}