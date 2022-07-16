export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et quam sit amet lectus consectetur commodo ut quis est. Quisque imperdiet nisl et ex tempor efficitur. Ut sed consequat tortor.',
      picture: null,
    },
    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString,
      text: 'aucibus elit hendrerit nulla iaculis sollicitudin. Suspendisse tincidunt tempus lorem, vitae accumsan urna venenatis vel. Cras malesuada porta nisi, quis cursus justo. In hac habitasse platea dictumst. ',
      picture: null,
    },
    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString,
      text: 'Nulla ac iaculis est. Suspendisse non dignissim orci. In id tortor nec ex aliquam rhoncus. Pellentesque ac facilisis metus',
      picture: null,
    },
  ],
});
