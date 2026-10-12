// @tempo-home — Tempo home canvas (the workspace Run button opens this). Managed marker; do not remove.
//
// One storyboard rendering your app's home route ("/"). Run (workspace header)
// opens this canvas beside your app's dev-server logs. Set the app dev command
// (set_app_dev_command) so the "/" route renders here.

import { Canvas, RouteStoryboard } from 'tempo-sdk/canvas'
import { HtmlStoryboard as TempoCanvasHtmlStoryboard } from "tempo-sdk/canvas";

export default function HomeCanvas() {
  return (
    <Canvas name="Home">
      <RouteStoryboard
        id="Home"
        name="Workout — Week 1 Day 2 (/)"
        route="/"
        layout={{ x: 0, y: -24, width: 430, height: 1800 }}
      />
      <RouteStoryboard
        id="Mesos"
        name="Mesos (/mesos)"
        route="/mesos"
        layout={{ x: 510, y: 0, width: 430, height: 932 }}
      />
      <RouteStoryboard
        id="Templates"
        name="Templates (/templates)"
        route="/templates"
        layout={{ x: 1020, y: 0, width: 430, height: 932 }}
      />
      <RouteStoryboard
        id="Exercises"
        name="Exercises (/exercises)"
        route="/exercises"
        layout={{ x: 1530, y: 0, width: 430, height: 932 }}
      />
      <RouteStoryboard
        id="More"
        name="More (/more)"
        route="/more"
        layout={{ x: 2040, y: 0, width: 430, height: 932 }}
      />
      <TempoCanvasHtmlStoryboard
        id="HTMLPasteStoryboard"
        name="HTMLPasteStoryboard"
        filepath="./.tempo-html-paste/HTMLPasteStoryboard.html"
        layout={{ x: 2550, y: 0, width: 1280, height: 800 }}
      />
    </Canvas>
  )
}
