
import { Button } from 'src/components/ui/button';
import '/src/App.css'
import BlockPost from 'src/components/block-post';
const index = () => {
  return (
    <>
    <main>
    <h1 class='text-xl font-bold'>Вітаємо в фоурмі про сервери і автомізацію просесів серверу.</h1>
    <Button>Go</Button>
    <BlockPost title="test" route="/forum" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae placeat reprehenderit, ipsum voluptates quo saepe ex quod tenetur, dolores ullam, alias ad. Recusandae magnam aut voluptates officiis, vitae possimus corporis?"></BlockPost> 
    </main>
    </>
  );
};

export default index;