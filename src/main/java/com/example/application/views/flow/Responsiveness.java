package com.example.application.views.flow;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.orderedlayout.FlexLayout;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.flow.theme.lumo.LumoUtility;

@Route(value = "responsiveness")
@AnonymousAllowed
public class Responsiveness extends VerticalLayout {

    public Responsiveness() {
        createLumoUtilityExample();
        createMediaQueryExample();
    }

    private void createLumoUtilityExample() {
        FlexLayout layout = new FlexLayout();
        layout.setWidthFull();
        layout.addClassNames(
            LumoUtility.FlexDirection.COLUMN,
            LumoUtility.FlexDirection.Breakpoint.Medium.ROW // Viewport width > 768px
        );
        layout.add(createSlot(new H1("Slot 1")));
        layout.add(createSlot(new H1("Slot 2")));

        Button button = new Button("Slot 3");
        button.addClassNames(
            LumoUtility.Display.INLINE_BLOCK,
            LumoUtility.Display.Breakpoint.Small.HIDDEN // Viewport width > 640px
        );
        layout.add(createSlot(new H1("Slot 3"), button));

        add(layout);
    }

    private void createMediaQueryExample() {
        FlexLayout layout = new FlexLayout();
        layout.setWidthFull();
        layout.addClassNames("tablet-horizontal-to-vertical");
        layout.add(createSlot(new H1("Slot 1")));
        layout.add(createSlot(new H1("Slot 2")));

        Button button = new Button("Slot 3");
        button.addClassName("mobile-show");
        layout.add(createSlot(new H1("Slot 3"), button));
        add(layout);
    }

    private static Div createSlot(Component... c) {
        Div div = new Div(c);
        div.setWidth("360px");
        div.addClassNames(LumoUtility.Border.ALL, LumoUtility.BorderColor.CONTRAST_60, LumoUtility.Padding.MEDIUM, LumoUtility.Background.BASE);
        return div;
    }

}
