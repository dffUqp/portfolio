import { TicTacToe } from 'features';
import { Container, Tabs } from 'shared/ui';

const items = [
  {
    key: '1',
    label: 'Tic Tac Toe',
    children: <TicTacToe />,
  },
  {
    key: '2',
    label: 'Big O graph',
    children: (
      <div className="flex justify-center items-center text-gray-400/60 h-[500px]">
        Big O graph preview
      </div>
    ),
  },
  {
    key: '3',
    label: 'About',
    children: (
      <div className="flex justify-center items-center text-gray-400/60 h-[500px]">
        About preview
      </div>
    ),
  },
];

const onChange = (key: string) => {
  console.log(key);
};

const InteractionWidget = () => {
  return (
    <Container>
      <div className="h-[100vh] flex flex-col justify-center items-center gap-6 text-white">
        <div className="w-[700px]">
          <Tabs items={items} onChange={onChange} />
        </div>
      </div>
    </Container>
  );
};

export { InteractionWidget };
