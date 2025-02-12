package com.example.application.views.flow;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.orderedlayout.FlexLayout;
import com.vaadin.flow.component.timepicker.TimePicker;

import com.vaadin.flow.component.combobox.ComboBox;

import com.vaadin.flow.component.checkbox.Checkbox;

import com.vaadin.flow.component.textfield.NumberField;

import com.vaadin.flow.component.textfield.TextField;

import com.vaadin.flow.theme.lumo.LumoUtility;

import com.vaadin.flow.component.orderedlayout.VerticalLayout;

import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.server.auth.AnonymousAllowed;

@Route(value = "formexample")
@PageTitle("FormExample")
@AnonymousAllowed
public class FormExample extends VerticalLayout {

    public FormExample() {
        add(new H1("Form Example"));

        TextField textField = new TextField("Text field");
        TextField textField2 = new TextField("Text field with very long label");
        textField2.setTooltipText("Tooltip");
        textField2.addClassName("has-info");
        TimePicker time = new TimePicker("Time");
        add(createFormRow(textField, textField2, time));

        NumberField number = new NumberField("Number");
        number.setTooltipText("Tooltip");
        number.addClassName("has-info");
        TextField textField3 = new TextField("Text field");
        Checkbox checkbox = new Checkbox("Checkbox");
        ComboBox<String> comboBox = new ComboBox<>("Combo Box");
        comboBox.setItems("One", "Two", "Three");
        add(createFormRow(number, textField3, comboBox, checkbox));

        TextField textField4 = new TextField("Text field");
        TextField textField5 = new TextField("Text field");
        TimePicker time2 = new TimePicker("Time");
        time2.setTooltipText("Tooltip");
        time2.addClassName("has-info");
        add(createFormRow(textField4, textField5, time2));
    }

    private static FlexLayout createFormRow(Component... c) {
        FlexLayout row = new FlexLayout(c);
        row.setAlignItems(Alignment.BASELINE);
        row.setFlexWrap(FlexLayout.FlexWrap.WRAP);
        row.addClassNames(LumoUtility.Gap.Column.MEDIUM);
        return row;
    }

}
