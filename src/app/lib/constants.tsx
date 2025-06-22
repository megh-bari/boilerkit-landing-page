import {
  Zap,
  Brain,
  Settings,
  Target,
  FileCode,
  Keyboard,
  Play,
} from "lucide-react";
import type { Feature, Step, NavItem } from "@/app/types";

export const NAV_ITEMS: NavItem[] = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it Works" },
];

export const FEATURES: Feature[] = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Instant Code Insertion",
    description: "Type a trigger and get boilerplate instantly",
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "30+ Languages Supported",
    description: "Python, React, C++, Go, and many more",
  },
  {
    icon: <Settings className="h-6 w-6" />,
    title: "Zero Configuration",
    description: "Works out of the box, no setup needed",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Consistent Naming",
    description: "All triggers follow langboiler pattern",
  },
];

export const POPULAR_TRIGGERS = [
  "reactjsboiler",
  "pyboiler",
  "cppboiler",
  "jsboiler",
  "htmlboiler",
  "nextjsboiler",
  "goboiler",
  "rustboiler",
  "javaboiler",
  "tsboiler",
  "cssboiler",
  "phpboiler",
];

export const STEPS: Step[] = [
  {
    icon: <FileCode className="h-8 w-8" />,
    title: "Open File",
    description: "Create or open any file in VS Code",
  },
  {
    icon: <Keyboard className="h-8 w-8" />,
    title: "Type Trigger",
    description: "Enter boilerplate trigger (e.g., pyboiler)",
  },
  {
    icon: <Play className="h-8 w-8" />,
    title: "Press Enter",
    description: "Watch your code appear instantly",
  },
];

export const DEMO_CODE = {
  trigger: "cppboiler",
  expansion: `#include <bits/stdc++.h>
using namespace std;

int main() {
    cout << "Hello World! Welcome to BoilerKit" << endl;
    return 0;
}`,
};
