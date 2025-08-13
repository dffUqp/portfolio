import { Container, Tabs } from 'shared/ui';

const items = [
  {
    key: '1',
    label: 'Tic Tac Toe',
    children: (
      <div className="flex justify-center items-center text-gray-400/60 h-80">
        Tic Tac Toe preview
      </div>
    ),
  },
  {
    key: '2',
    label: 'Big O graph',
    children: (
      <div className="flex justify-center items-center text-gray-400/60 h-80">
        Big O graph preview
      </div>
    ),
  },
  {
    key: '3',
    label: 'Chess',
    children: (
      <div className="flex justify-center items-center text-gray-400/60 h-80">
        Chess preview
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
        <div className="w-[600px]">
          <Tabs items={items} onChange={onChange} />
        </div>
      </div>
    </Container>
  );
};

export { InteractionWidget };
