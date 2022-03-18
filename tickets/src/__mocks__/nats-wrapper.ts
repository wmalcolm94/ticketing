export const natsWrapper = {
  connect: jest.fn(),
  client: {
    publish: jest.fn().mockImplementation((subject: string, data: string, callback: () => void) => {
      callback();
    })
  }
};