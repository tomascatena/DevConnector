import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CustomDialog from './CustomDialog';
import { UIElementBox, InputContainer } from '../UIElementStoriesHelpers.styled';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI-Elements/CustomDialog',
  component: CustomDialog,
  decorators: [
    (Story, context) => (
    <UIElementBox>
      <InputContainer>
        <Story {...context}/>
      </InputContainer>
    </UIElementBox>
    ),
  ]
} as ComponentMeta<typeof CustomDialog>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CustomDialog> = (args) => {
  return (
    <CustomDialog
      {...args}
      title='Custom Dialog Title'
    >
      <h3>Content</h3>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos veritatis earum neque officiis mollitia labore excepturi illum amet a. Assumenda, quo eveniet ratione alias optio sint corrupti iure nostrum nesciunt hic dicta deserunt! Doloremque sequi, fuga voluptate harum officia earum autem ratione optio repudiandae dolores exercitationem accusamus dignissimos dolore. Corporis aperiam ut eum atque aut qui dolorem quaerat fugiat tenetur harum nulla excepturi architecto at, ab magni incidunt aliquid! Maiores, repellendus vel. Veritatis pariatur voluptates aspernatur vitae, vero placeat consectetur culpa consequuntur accusantium voluptas adipisci quod sapiente temporibus eius distinctio illum cupiditate necessitatibus quisquam voluptatum sequi totam excepturi corrupti neque amet. Nesciunt quos dolorem sed reprehenderit officiis quas excepturi labore mollitia fugit voluptate obcaecati exercitationem, earum sapiente expedita temporibus ipsa illum placeat harum voluptas commodi molestias blanditiis? Maiores officia deleniti magnam tempora vitae, animi quibusdam nostrum fugit aliquam veniam odio architecto dolore fugiat maxime voluptatem, et totam numquam repellat nulla. Adipisci blanditiis similique voluptas soluta veniam nulla voluptate obcaecati necessitatibus ducimus repellat repudiandae praesentium, doloribus dolor ut, saepe placeat rem dicta eius enim quasi provident, ea consequuntur mollitia assumenda. Aliquam, minus eligendi fuga perferendis aliquid molestias rem, explicabo corporis dignissimos error deserunt aspernatur quas eum assumenda! Sequi obcaecati ad quidem eligendi vel! Ad optio repellat eligendi unde, odit illum, obcaecati ea, natus maxime quod enim est odio. Ex labore enim tenetur praesentium tempora accusantium, totam omnis iusto rerum aut officiis, dolores perferendis quibusdam ducimus itaque repellendus aspernatur deserunt sequi nostrum. Blanditiis commodi ex harum voluptates, obcaecati assumenda porro laudantium minima, consectetur corporis hic odit praesentium. Temporibus eos impedit voluptates mollitia aliquid consequatur nulla id deleniti nostrum tempora quasi minus quidem, tenetur dolores perferendis molestiae ab soluta sunt. Consectetur, deserunt! Voluptatibus, impedit officiis illum accusamus distinctio nesciunt, doloremque dolorem ex cupiditate laborum ducimus? Totam fuga repellat repudiandae hic, incidunt facilis ipsum quaerat voluptatum veniam mollitia? Repellat delectus quisquam fugiat porro deleniti recusandae quo impedit. Quisquam, soluta minus. Fugit quod enim nihil recusandae accusantium, consequuntur necessitatibus, dolor minima nulla incidunt praesentium nam! Incidunt aspernatur accusamus quidem quaerat sequi minima illum, fugiat voluptates hic repudiandae ratione, vitae maiores beatae doloribus saepe, animi in earum perferendis suscipit quisquam dolorum soluta? Similique corporis natus reiciendis? Sit nam ex consectetur cupiditate vitae expedita aut deleniti aliquid quo tempore quae sunt qui exercitationem laborum ut, nemo odio asperiores nesciunt beatae pariatur est fugit necessitatibus. Quis, culpa quidem. Ea doloremque, itaque exercitationem hic soluta temporibus nostrum maiores ipsum earum odit ut sequi officia aliquam eum non debitis. Illo enim saepe fugiat! Odit nostrum vitae minima illum molestiae quo voluptate iste eligendi assumenda nesciunt vero sunt neque, necessitatibus corrupti! Placeat illum, vel velit ratione vitae ipsum suscipit architecto animi iusto aliquid cupiditate quis impedit sint ad reprehenderit praesentium officia odio modi eveniet consequuntur quod ut, quisquam quo et! Qui quis, ad eligendi eveniet nam ex voluptate, adipisci fuga dignissimos tempore numquam optio veniam, expedita asperiores reiciendis non exercitationem reprehenderit. Cumque velit at quae eligendi consectetur tempore molestiae, accusamus quisquam laborum, quidem nesciunt fuga ex iste asperiores minus nobis mollitia.</p>
    </CustomDialog>
  );
};

export const InteractiveCustomDialog = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InteractiveCustomDialog.args = {
  setOpenDialog: () => {},
  isDialogOpen: true
};
