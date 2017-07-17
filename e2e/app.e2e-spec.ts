import { FileUploadPage } from './app.po';

describe('file-upload App', () => {
  let page: FileUploadPage;

  beforeEach(() => {
    page = new FileUploadPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
