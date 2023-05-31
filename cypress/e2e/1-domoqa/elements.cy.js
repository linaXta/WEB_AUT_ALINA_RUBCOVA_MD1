import SelectablePage from "../../pageObjects/selectablePage";

describe('Selectable page', () => {
  context('Selectable page scenarios', () => {
    beforeEach(() => {
      SelectablePage.visit();
    });

    it('"Grid" section clicks', () => {
      SelectablePage.gridButton.click();
      
      // Klikšķina uz "Two","Four","Six","Eight" pogas
      SelectablePage.clickOnItem('Two');
      SelectablePage.clickOnItem('Four');
      SelectablePage.clickOnItem('Six');
      SelectablePage.clickOnItem('Eight');

      // Pārbaude, vai  "Two","Four","Six","Eight" ir izcelts
      SelectablePage.isItemHighlighted('Two');
      SelectablePage.isItemHighlighted('Four');
      SelectablePage.isItemHighlighted('Six');
      SelectablePage.isItemHighlighted('Eight');
 
      // Pārbaude, vai "One", "Three", "Five", "Seven", "Nine" nav izcelti
      SelectablePage.isItemNotHighlighted('One');
      SelectablePage.isItemNotHighlighted('Three');
      SelectablePage.isItemNotHighlighted('Five');
      SelectablePage.isItemNotHighlighted('Seven');
      SelectablePage.isItemNotHighlighted('Nine');

    });
  });
});