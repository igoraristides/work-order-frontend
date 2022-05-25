export interface ServiceOrderResponseDto {
  id: string;
  obs: string;
  Client: {
    id: string;
    name: string;
  };
  Task: [
    {
      id: number;
    }
  ];
  WorkOrderStatus: {
    id: number;
    description: string;
  };
}
