context("TodoMVC", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
    createTodo(todoText)
  })

  const todoText = "Take out garbage"

  const getTodo = (todoText, additionalSelectors = "") => {
    return cy.get(`[name="${todoText}"] ${additionalSelectors}`)
  }

  const createTodo = (todoText) => {
    cy.get(".new-todo").type(`${todoText}{enter}`)
  }
  const toggleTodo = (todoText) => {
    getTodo(todoText, ".toggle").click()
  }
  const deleteTodo = (todoText) => {
    getTodo(todoText, ".destroy").click()
    getTodo(todoText).should("not.be.visible")
  }

  const editTodo = (todoText, textToType) => {
    getTodo(todoText, "label").dblclick()
    cy.get(`input.edit[value="${todoText}"]`).type(`${textToType}{enter}`)
  }

  it("can toggle a new todo and update the styling", () => {
    toggleTodo(todoText)
    cy.get(".completed").should("be.visible")
    toggleTodo(todoText)
    cy.get(".completed").should("not.be.visible")
  }) // eslint-disable-line

  it("can remove a todo", () => {
    deleteTodo(todoText)
    getTodo(todoText).should("not.be.visible")
  })

  it("can edit a todo", () => {
    editTodo(todoText, " today")
    getTodo(`${todoText} today`).should("be.visible")
  })

  it("can show only active todos", () => {
    createTodo("2")
    toggleTodo("2")
    cy.contains("Active").click()
    getTodo("2").should("not.be.visible")
    getTodo(todoText).should("be.visible")
  })

  it("can show only completed todos", () => {
    createTodo("2")
    toggleTodo("2")
    cy.contains("Completed").click()
    getTodo("2").should("be.visible")
    getTodo(todoText).should("not.be.visible")
  })

  it("can clear completed todos", () => {
    createTodo("2")
    toggleTodo("2")
    toggleTodo(todoText)
    cy.contains("Clear completed").click()
    getTodo("2").should("not.be.visible")
    getTodo(todoText).should("not.be.visible")
  })
})
