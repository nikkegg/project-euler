defmodule Problem1Test do
  use ExUnit.Case
  doctest Problem1

  describe "Recursive solution:" do
    test "sum_multiples_recursive returns correct results from 1 up to a 1000", state do
      assert Problem1.sum_multiples_recursive(1000, 3, 5) == 234_168
    end

    test "sum_multiples_recursive returns correct results from 1 up to a 9", state do
      assert Problem1.sum_multiples_recursive(9, 3, 5) == 23
    end

    test "sum_multiples_recursive returns 0 if 0 bound is passed" do
      assert Problem1.sum_multiples_recursive(0, 3, 5) == 0
    end
  end

  describe "Functional solution:" do
    test "sum_multiples returns correct results from 1 up to a 1000", state do
      assert Problem1.sum_multiples_functional(1000, 3, 5) == 234_168
    end

    test "sum_multiples_functional returns correct results from 1 up to a 9", state do
      assert Problem1.sum_multiples_functional(9, 3, 5) == 23
    end

    test "sum_multiples_functional returns 0 if 0 bound is passed" do
      assert Problem1.sum_multiples_functional(0, 3, 5) == 0
    end
  end
end
