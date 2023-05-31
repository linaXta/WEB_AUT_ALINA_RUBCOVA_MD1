import BasePage from"./base.page";

class SelectablePage extends BasePage{

    static get url(){
        return'/selectable';
    }

    static get gridButton(){
        return cy.get("#demo-tab-grid");
    }

    static clickOnItem(itemText) {
        cy.contains(itemText).click();
    }
    
    static isItemHighlighted(itemText) {
        return cy.get('li.list-group-item.active.list-group-item-action')
          .contains(itemText)
          .should('have.class', 'active');
    }
    
    static isItemNotHighlighted(itemText) {
        return cy.contains(itemText).should('not.have.class', 'active');
    }

   
}
export default SelectablePage;