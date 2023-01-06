import Header from "@/Components/Header";
import Navbar from "@/Components/Navbar";

export default function About(props) 
{
    return (
        <>
        <Header title={props.title}/>
        <Navbar/>
        <div className="container fixed bg-slate-500">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis magni dolorem praesentium cum, cumque corrupti tempore assumenda quaerat eveniet recusandae commodi repellat. Aspernatur beatae odio adipisci corrupti iure. Qui doloremque modi, officiis tempora dolorum numquam debitis magnam. Perspiciatis minus delectus qui sapiente velit voluptates accusamus nulla maxime inventore ea voluptatem dolorem corporis necessitatibus dignissimos ex molestias sequi veniam, tenetur aliquam vel. At maiores quo totam blanditiis voluptatibus nesciunt a, vero amet doloremque rem adipisci aliquam ab nam officiis dolor labore perspiciatis harum, eligendi velit minus repudiandae, ea facilis earum voluptas? Quis aliquid, perspiciatis obcaecati magni pariatur dolore cumque porro magnam ut delectus suscipit odit voluptatum dignissimos laborum eum autem eos quod, numquam nostrum accusamus alias, recusandae voluptas quibusdam! In possimus modi tempora molestias?</p>
        </div>
        </>
    )
}