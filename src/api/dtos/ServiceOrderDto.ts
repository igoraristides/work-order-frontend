export interface ServiceOrderResponseDto {
  id: string;
  obs: string;
  Client: {
    id: string;
  };
  Task: [
    {
      id: 1;
    }
  ];
  WorkOrderStatus: {
    description: string;
  };
}
